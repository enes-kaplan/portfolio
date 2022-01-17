import { db, auth } from './firebase_setup'
import { query, where, collection, getDocs } from 'firebase/firestore'
import { TodoStatus } from '../static/enums'

export const getTodos = async () => {
	if (auth?.currentUser?.uid) {
		const todoCol = collection(db, 'ToDo')
		const q = query(
			todoCol,
			where('UserId', '==', auth?.currentUser?.uid),
			where('Status', '!=', TodoStatus.DELETED)
		)
		const todoSnapshot = await getDocs(q)
		const todoList = todoSnapshot.docs.map(doc => doc.data())
		return todoList
	}
}
