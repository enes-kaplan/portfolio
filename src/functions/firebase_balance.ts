import type { Balance, BalanceItem } from './firebase_types'
import { query, where, getDocs } from 'firebase/firestore'
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
