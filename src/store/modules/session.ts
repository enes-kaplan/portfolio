import type { Auth } from 'firebase/auth'

interface SessionState {
	currentUser: 'LOADING' | null | Auth
}

const state: SessionState = {
	currentUser: 'LOADING'
}

const getters = {
	getCurrentUser: (state: SessionState) => {
		return state.currentUser
	}
}

const mutations = {
	setUser(state: SessionState, data: Auth) {
		state.currentUser = data
	}
}

const actions = {}

export default {
	state,
	getters,
	mutations,
	actions
}
