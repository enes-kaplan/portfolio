import {
	collection,
	DocumentData,
	CollectionReference,
	DocumentReference
} from 'firebase/firestore'
import { firestore } from './firebase_setup'
import { Todo, Balance } from './firebase_types'

/* This is just a helper to add the type to the db responses */
const createCollection = <T = DocumentData>(collectionName: string) => {
	return collection(firestore, collectionName) as CollectionReference<T>
}
/** Returns sub-collection of a document with associated types */
export const createCollectionFromDocument = <T>(
	colRef: CollectionReference,
	docId: string,
	subCollectionName: string
) => {
	return collection(
		colRef,
		docId,
		subCollectionName
	) as CollectionReference<T>
}

export const todoCol = createCollection<Todo>('ToDo')
export const balanceCol = createCollection<Balance>('Balance')
