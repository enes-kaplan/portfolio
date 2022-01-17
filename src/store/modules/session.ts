import type { Auth } from "firebase/auth"

interface stateType {
	currentUser: 'LOADING' | null | Auth
}

const state: stateType = {
	currentUser: 'LOADING'
}

const getters = {
	getCurrentUser: (state: stateType) => {
		return state.currentUser
	}
}

const mutations = {
	setUser(state: stateType, data: Auth) {
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
