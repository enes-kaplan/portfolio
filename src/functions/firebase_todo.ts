import type { Todo } from './firebase_types'
import {
	query,
	where,
	doc,
	getDoc,
	getDocs,
	setDoc,
	addDoc,
	orderBy,
	DocumentReference
} from 'firebase/firestore'
import { firestore, auth } from './firebase_setup'
import { TodoStatus } from '../static/enums'
import { todoCol } from './firebase_db'

export const getTodos = async (): Promise<Todo[] | undefined> => {
	if (auth?.currentUser?.uid) {
		const q = query(
			todoCol,
			where('UserId', '==', auth?.currentUser?.uid),
			where('Status', '!=', TodoStatus.DELETED),
			orderBy('Status'),
			orderBy('CreateDate')
		)
		const todoSnapshot = await getDocs(q)
		const todoList = todoSnapshot.docs.map(doc => {
			const data = doc.data()
			data.Id = doc.id
			return data
		})
		return todoList
	}
}

export const saveTodo = async (todo: Todo): Promise<Todo | undefined> => {
	let docRef: DocumentReference<Todo>
	if (todo?.Id) {
		// If editing an existing todo, just update the changed fields
		docRef = doc(todoCol, todo.Id)
		await setDoc(
			docRef,
			{
				Description: todo.Description,
				Status: todo.Status,
				UpdateDate: new Date()
			},
			{ merge: true }
		)
	} else {
		docRef = await addDoc(todoCol, todo)
	}
	const docSnapshot = await getDoc(docRef)
	const docData = docSnapshot.data()
	docData!.Id = docRef.id
	return docData
}

export const deleteTodo = async (todo: Todo) => {
	const todoRef = doc(todoCol, todo.Id)
	setDoc(
		todoRef,
		{ Status: TodoStatus.DELETED, UpdateDate: new Date() },
		{ merge: true }
	)
}
