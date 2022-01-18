import { DocumentData } from 'firebase/firestore'
import { db, auth } from './firebase_setup'
import {
	query,
	where,
	collection,
	doc,
	getDoc,
	getDocs,
	setDoc,
	addDoc,
	orderBy
} from 'firebase/firestore'
import { TodoStatus } from '../static/enums'

export const getTodos = async () => {
	if (auth?.currentUser?.uid) {
		const todoCol = collection(db, 'ToDo')
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
			const Id = doc.id
			const CreateDate = data.CreateDate.toDate()
			const UpdateDate = data.UpdateDate.toDate()
			return { Id, ...data, CreateDate, UpdateDate }
		})
		return todoList
	}
}

export const saveTodo = async (todo: DocumentData) => {
	if (todo?.Id) {
		// If editing an existing todo, just update description and UpdateDate
		const todoRef = doc(db, 'ToDo', todo.Id)
		setDoc(
			todoRef,
			{
				Description: todo.Description,
				Status: todo.Status,
				UpdateDate: new Date()
			},
			{ merge: true }
		)
	} else {
		const todoCol = collection(db, 'ToDo')
		const addedDocRef = await addDoc(todoCol, todo)
		const docSnapshot = await getDoc(addedDocRef)
		const docData = docSnapshot.data()
		return { ...docData, Id: addedDocRef.id }
	}
}

export const deleteTodo = async (todo: DocumentData) => {
	const todoRef = doc(db, 'ToDo', todo.Id)
	setDoc(
		todoRef,
		{ Status: TodoStatus.DELETED, UpdateDate: new Date() },
		{ merge: true }
	)
}
