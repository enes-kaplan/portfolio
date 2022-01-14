import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import type { Firestore } from 'firebase/firestore'
import { getFirestore, query, where, collection, getDocs } from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCNFOnSVhcMYPtrTGs7QCmNM9nf4CM3o-0",
  authDomain: "portfolio-69af6.firebaseapp.com",
  projectId: "portfolio-69af6",
  storageBucket: "portfolio-69af6.appspot.com",
  messagingSenderId: "410344053740",
  appId: "1:410344053740:web:244240728283e7c286fec9",
  measurementId: "G-D3RZG0VMZ7"
})
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

onAuthStateChanged(auth, user => {
	if (user !== null) {
		console.log('Logged in!')
	} else {
		console.log('No user!')
	}
})

export const getTodos = async (db: Firestore) => {
	const todoCol = collection(db, 'ToDo')
	const q = query(todoCol, where('Description', '==', ''))
	const todoSnapshot = await getDocs(q)
	const todoList = todoSnapshot.docs.map(doc => doc.data())
	return todoList
}
getTodos(db)
