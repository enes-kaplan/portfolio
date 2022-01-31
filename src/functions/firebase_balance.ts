import type { Balance } from './firebase_types'
import { query, where, getDocs, orderBy } from 'firebase/firestore'
import { auth } from './firebase_setup'
import { balanceCol } from './firebase_db'

export const getBalances = async (
	year: number,
	month: number
): Promise<Balance[] | undefined> => {
	if (auth?.currentUser?.uid) {
		const q = query(
			balanceCol,
			where('UserId', '==', auth.currentUser.uid),
			where('Year', '==', year),
			where('Month', '==', month),
			orderBy('Order')
		)
		const snapshot = await getDocs(q)
		const list = snapshot.docs.map(doc => {
			const data = doc.data()
			data.Id = doc.id
			return data
		})
		return list
	}
}
