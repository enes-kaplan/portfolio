import type { DocumentData } from 'firebase/firestore'
import { auth } from '../../functions/firebase_setup'
import { TodoStatus } from '../../static/enums'

interface StateType {
	todoList: DocumentData[]
	newTodo: Object | null
}

const state: StateType = {
	todoList: [],
	newTodo: null
}

const getters = {
	getTodoList: (state: StateType): DocumentData[] => {
		return state.todoList
	},
	getTodoByStatus: (state: StateType) => (status: Number) => {
		return state.todoList.filter(f => f.Status === status)
	},
	getStatusText: () => (status: Number) => {
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
	updateTodoList(state: StateType, data: DocumentData[]) {
		state.todoList = data
	},
	updateTodo(state: StateType, data: DocumentData) {
		const updatedTodo = state.todoList.find(f => f.Id === data.Id)
		Object.assign(updatedTodo, data)
	},
	addNewTodo(state: StateType, status: Number) {
		state.newTodo = {
			UserId: auth.currentUser?.uid,
			Title: '',
			Description: '',
			CreateDate: new Date(),
			UpdateDate: new Date(),
			Status: status
		}
	},
	addTodoToList(state: StateType, todo: DocumentData) {
		state.todoList.push(todo)
		state.newTodo = null
	},
	cancelNewTodo(state: StateType) {
		state.newTodo = null
	}
}

const actions = {}

export default {
	state,
	getters,
	mutations,
	actions
}
