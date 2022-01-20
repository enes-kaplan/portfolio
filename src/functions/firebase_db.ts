import {
	collection,
	DocumentData,
	CollectionReference
} from 'firebase/firestore'
import { firestore } from './firebase_setup'
import { Todo } from './firebase_types'

// This is just a helper to add the type to the db responses
const createCollection = <T = DocumentData>(collectionName: string) => {
	return collection(firestore, collectionName) as CollectionReference<T>
}

export const todoCol = createCollection<Todo>('ToDo')
