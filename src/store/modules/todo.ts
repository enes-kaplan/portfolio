import { DocumentData } from 'firebase/firestore'

interface stateType {
	todoList: DocumentData[]
}

const state: stateType = {
	todoList: []
}

const getters = {
	getTodoList: (state: stateType) => {
		return state.todoList
	}
}

const mutations = {
	updateTodoList(state: stateType, data: DocumentData[]) {
		state.todoList = data
	}
}

const actions = {}

export default {
	state,
	getters,
	mutations,
	actions
}
