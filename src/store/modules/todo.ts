import type { Todo } from '@/functions/firebase_types'
import { Timestamp } from 'firebase/firestore'
import { auth } from '../../functions/firebase_setup'
import { TodoStatus } from '../../static/enums'

interface StateType {
	todoList: Todo[]
	newTodo: Todo | null
}

const state: StateType = {
	todoList: [],
	newTodo: null
}

const getters = {
	getTodoList: (state: StateType): Todo[] => {
		return state.todoList
	},
	getTodoByStatus: (state: StateType) => (status: Number) => {
		return state.todoList.filter(f => f.Status === status)
	},
	getTodoById: (state: StateType) => (Id: String) => {
		return state.todoList.find(f => f.Id === Id)
	},
	getStatusText: () => (status: Number) => {
		switch (status) {
			case TodoStatus.TODO:
				return 'To-do'
			case TodoStatus.IN_PROGRESS:
				return 'In progress'
			case TodoStatus.DONE:
				return 'Done'
			case TodoStatus.DELETED:
				return 'Deleted'
			default:
				return ''
		}
	}
}

const mutations = {
	updateTodoList(state: StateType, data: Todo[]) {
		state.todoList = data
	},
	updateTodo(state: StateType, data: Todo) {
		const updatedTodo = state.todoList.find(f => f.Id === data.Id)
		Object.assign(updatedTodo, data)
	},
	updateTodoStatus(state: StateType, data: Todo) {
		const updatedTodo = state.todoList.find(f => f.Id === data.Id)
		Object.assign(updatedTodo, { ...updatedTodo, Status: data.Status })
	},
	createNewTodo(state: StateType, status: TodoStatus) {
		const currentTimestamp = Timestamp.fromDate(new Date())
		state.newTodo = {
			UserId: auth.currentUser?.uid,
			Title: '',
			Description: '',
			CreateDate: currentTimestamp,
			UpdateDate: currentTimestamp,
			Status: status
		}
	},
	addTodoToList(state: StateType, todo: Todo) {
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
