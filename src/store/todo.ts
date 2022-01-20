import type { Todo } from '@/functions/firebase_types'
import { TodoStatus } from '@/static/enums'
import { defineStore } from 'pinia'
import { auth } from '@/functions/firebase_setup'
import { Timestamp } from 'firebase/firestore'

interface State {
	todoList: Todo[]
	newTodo: Todo | null
}

export const useTodoStore = defineStore('todo', {
	state: (): State => ({
		todoList: [],
		newTodo: null
	}),
	getters: {
		getTodoList: state => state.todoList,
		getTodoByStatus: state => (status: TodoStatus) =>
			state.todoList.filter(f => f.Status === status),
		getTodoById: state => (Id: string) =>
			state.todoList.find(f => f.Id === Id),
		getStatusText: () => (status: TodoStatus) => {
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
	},
	actions: {
		updateTodoList(data: Todo[]) {
			this.todoList = data
		},
		updateTodo(data: Todo) {
			const todoToUpdate = this.todoList.find(f => f.Id === data.Id)
			Object.assign(todoToUpdate, data)
		},
		updateTodoStatus(data: Todo) {
			const todoToUpdate = this.todoList.find(f => f.Id === data.Id)
			Object.assign(todoToUpdate, {
				...todoToUpdate,
				Status: data.Status
			})
		},
		createNewTodo(status: TodoStatus) {
			const currentTimestamp = Timestamp.fromDate(new Date())
			this.newTodo = {
				UserId: auth.currentUser?.uid,
				Title: '',
				Description: '',
				CreateDate: currentTimestamp,
				UpdateDate: currentTimestamp,
				Status: status
			}
		},
		addTodoToList(todo: Todo) {
			this.todoList.push(todo)
			this.newTodo = null
		},
		cancelNewTodo() {
			this.newTodo = null
		}
	}
})
