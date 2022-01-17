import type { DocumentData } from 'firebase/firestore'
import { TodoStatus } from '../../static/enums'

interface stateType {
	todoList: DocumentData[]
}

const state: stateType = {
	todoList: []
}

const getters = {
	getTodoList: (state: stateType) => {
		return state.todoList
	},
	getTodoByStatus: (state: stateType) => (status: Number) => {
		return state.todoList.filter(f => f.Status === status)
	},
	getStatusText: (state: stateType) => (status: Number) => {
		switch (status) {
			case TodoStatus.TODO:
				return 'To-do'
			case TodoStatus.IN_PROGRESS:
				return 'In progress'
			case TodoStatus.DONE:
				return 'Done'
			default:
				return ''
		}
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
