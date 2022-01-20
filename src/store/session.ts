import type { User } from 'firebase/auth'
import { defineStore } from 'pinia'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/functions/firebase_setup'

interface State {
	currentUser: User | 'LOADING' | null
}

export const useSessionStore = defineStore('session', {
	state: (): State => ({
		currentUser: 'LOADING'
	}),
	getters: {
		getCurrentUser: state => state.currentUser
	},
	actions: {
		setUser(user: State['currentUser']) {
			this.currentUser = user
		}
	}
})

onAuthStateChanged(auth, user => {
	const sessionStore = useSessionStore()
	sessionStore.setUser(user)
})
