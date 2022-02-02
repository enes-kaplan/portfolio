import { addDoc, DocumentReference } from 'firebase/firestore'
import type { Balance, BalanceItem } from './firebase_types'
import { query, where, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { BalanceType } from '@/static/enums'
import { auth } from './firebase_setup'
import { balanceCol, createSubCollectionFromDocId } from './firebase_db'

const createDocId = (userId: string, year: number, month: number) => {
	return `${userId}_${year}-${month}`
}

export const getSummariesOfYear = async (
	year: number
): Promise<Balance[] | undefined> => {
	if (auth?.currentUser?.uid) {
		const q = query(
			balanceCol,
			where('UserId', '==', auth.currentUser.uid),
			where('Year', '==', year),
			where('isDeleted', '==', false)
		)
		const snapshot = await getDocs(q)
		const list = snapshot.docs.map(doc => {
			const data = doc.data()
			data.Id = doc.id
			doc.ref
			return data
		})
		return list
	}
}

export const getSummaryOfMonth = async (
	year: number,
	month: number
): Promise<Balance[] | undefined> => {
	if (auth?.currentUser?.uid) {
		const q = query(
			balanceCol,
			where('UserId', '==', auth.currentUser.uid),
			where('Year', '==', year),
			where('Month', '==', month),
			where('isDeleted', '==', false)
		)
		const snapshot = await getDocs(q)
		const list = snapshot.docs.map(doc => {
			const data = doc.data()
			data.Id = doc.id
			doc.ref
			return data
		})
		return list
	}
}

export const getItemsOfMonth = async (
	year: number,
	month: number
): Promise<BalanceItem[] | undefined> => {
	if (auth?.currentUser?.uid) {
		const itemsRef = createSubCollectionFromDocId<BalanceItem>(
			balanceCol,
			createDocId(auth.currentUser.uid, year, month),
			'Item'
		)
		const q = query(itemsRef, where('isDeleted', '==', false))
		const snapshot = await getDocs(q)
		const list = snapshot.docs.map(doc => {
			const data = doc.data()
			data.Id = doc.id
			return data
		})
		return list
	}
}

/** Checks if a document for a given year and month already exists */
export const checkIfDocumentExists = async (
	year: number,
	month: number
): Promise<boolean> => {
	const parentDoc = doc(
		balanceCol,
		createDocId(auth!.currentUser!.uid, year, month)
	)
	const docToCheck = await getDoc(parentDoc)
	const data = docToCheck.data()
	return !!data
}

export const isExpenditure = (type: BalanceType) => {
	switch (type) {
		case BalanceType.ELECTRICITY:
		case BalanceType.WATER:
		case BalanceType.GAS:
		case BalanceType.INTERNET:
		case BalanceType.PHONE:
		case BalanceType.RENT:
		case BalanceType.CREDIT:
		case BalanceType.MARKET:
		case BalanceType.EXPENDITURE:
			return true
		case BalanceType.SALARY:
		case BalanceType.INCOME:
			return false

		default:
			return true
	}
}

/** Checks if there is an existing document for the given year-month
 * If it exists, adds the balance item into the document's 'Item' collection
 * Otherwise, creates a new 'Item' collection and saves the balance item in it
 * Then updates the summary object depending on BalanceItem's Type
 */
export const saveItem = async (
	item: BalanceItem,
	year: number,
	month: number
): Promise<BalanceItem | undefined> => {
	if (!auth?.currentUser?.uid) {
		return
	}

	const parentDocumentExists = await checkIfDocumentExists(year, month)
	if (!item.Id && !parentDocumentExists) {
		// If the parent document doesn't exist yet, we create the parent document with default values
		const newDocRef = doc(
			balanceCol,
			createDocId(auth.currentUser.uid, year, month)
		)
		const newDoc: Balance = {
			UserId: auth.currentUser.uid,
			Year: year,
			Month: month,
			TotalIncome: 0,
			TotalExpenditure: 0,
			isDeleted: false
		}
		await setDoc(newDocRef, newDoc)
	}

	// Save the item
	const itemsRef = createSubCollectionFromDocId<BalanceItem>(
		balanceCol,
		createDocId(auth.currentUser.uid, year, month),
		'Item'
	)

	let itemRef: DocumentReference<BalanceItem>
	if (item.Id) {
		itemRef = doc(itemsRef, item.Id)
		await setDoc(itemRef, item)
	} else {
		itemRef = await addDoc(itemsRef, item)
	}

	// Update the summary values
	const parentDocRef = doc(
		balanceCol,
		createDocId(auth.currentUser.uid, year, month)
	)
	const parentDocSnapshot = await getDoc(parentDocRef)
	const parentDoc = parentDocSnapshot.data()
	if (isExpenditure(item.Type)) {
		parentDoc!.TotalExpenditure += item.Amount
	} else {
		parentDoc!.TotalIncome += item.Amount
	}
	await setDoc(parentDocRef, parentDoc)

	const docSnapshot = await getDoc(itemRef)
	const docData = docSnapshot.data()
	docData!.Id = itemRef.id
	return docData
}

export const deleteItem = async (
	item: BalanceItem,
	year: number,
	month: number
): Promise<BalanceItem | undefined> => {
	if (auth?.currentUser?.uid) {
		const itemsRef = createSubCollectionFromDocId<BalanceItem>(
			balanceCol,
			createDocId(auth.currentUser.uid, year, month),
			'Item'
		)
		const itemRef = doc(itemsRef, item.Id)
		item.isDeleted = true
		await setDoc(itemRef, item)

		const docSnapshot = await getDoc(itemRef)
		const docData = docSnapshot.data()
		docData!.Id = itemRef.id
		if (docData?.isDeleted) {
			return docData
		}
	}
}
