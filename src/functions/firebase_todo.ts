import { db, auth } from './firebase_setup'
import { query, where, collection, getDocs } from 'firebase/firestore'

export const getTodos = async () => {
	const todoCol = collection(db, 'ToDo')
	const q = query(todoCol, where('UserId', '==', auth?.currentUser?.uid))
	const todoSnapshot = await getDocs(q)
	const todoList = todoSnapshot.docs.map(doc => doc.data())
	return todoList
}
