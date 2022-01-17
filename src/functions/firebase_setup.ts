import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import store from '../store/index'

const firebaseApp = initializeApp({
	apiKey: 'AIzaSyCNFOnSVhcMYPtrTGs7QCmNM9nf4CM3o-0',
	authDomain: 'portfolio-69af6.firebaseapp.com',
	projectId: 'portfolio-69af6',
	storageBucket: 'portfolio-69af6.appspot.com',
	messagingSenderId: '410344053740',
	appId: '1:410344053740:web:244240728283e7c286fec9',
	measurementId: 'G-D3RZG0VMZ7'
})
export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)

onAuthStateChanged(auth, user => {
	store.commit('setUser', user)
})
