<template>
	<div
		class="max-h-[34rem] border border-dark dark:border-light rounded pb-6 shadow dark:shadow-light overflow-y-auto noScrollbar"
		:class="{ 'bg-gray-200 dark:bg-gray-600': dragging }"
		dropzone="move"
		@dragover.prevent="dragOverEv"
		@drop="moveTodo"
		@dragleave="dragging = false"
	>
		<div
			class="sticky top-0 flex justify-between bg-light dark:bg-dark w-full px-4 py-4 border-b border-dark dark:border-light transition-colors duration-300 z-10"
		>
			<h2>
				{{ getStatusText(status) }}
			</h2>
			<button aria-label="Add new todo" @click="createNewTodo(status)">
				<PlusIcon class="w-6 h-6" />
			</button>
		</div>
		<div class="flex flex-col gap-6 px-6 pt-8 pb-6">
			<transition name="scale">
				<NewTodo
					v-if="
						todoStore.newTodo !== null &&
						todoStore.newTodo.Status === status
					"
				/>
			</transition>
			<Todo
				v-for="(todo, i) in getTodoByStatus(status)"
				:key="i"
				:todo="todo"
				:is-draggable="isDraggable"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/store/todo'
import { ref } from 'vue'
import { PlusIcon } from '@heroicons/vue/outline'
import { saveTodo } from '@/functions/firebase_todo'
import NewTodo from './NewTodo.vue'
import Todo from './Todo.vue'

const todoStore = useTodoStore()
const {
	getStatusText,
	getTodoByStatus,
	getTodoById,
	createNewTodo,
	updateTodo
} = todoStore
const props = defineProps({
	status: {
		type: Number, // Type: ToDoStatus enum
		required: true
	},
	isDraggable: {
		type: Boolean,
		required: true
	}
})

const dragging = ref(false)
const dragOverEv = (ev: DragEvent) => {
	if (ev && ev.dataTransfer) {
		ev.dataTransfer.dropEffect = 'move'
	}
	dragging.value = true
}

const moveTodo = (ev: DragEvent) => {
	const Id = ev?.dataTransfer?.getData('text/plain')
	const todo = getTodoById(Id!)
	if (todo?.Status !== props.status) {
		const updatedTodo = { ...todo, Status: props.status }
		updateTodo(updatedTodo)
		saveTodo(updatedTodo)
	}
	dragging.value = false
}
</script>

<style>
.todo-wrapper {
	@apply border border-dark dark:border-light rounded shadow-md dark:shadow-sm dark:shadow-light overflow-hidden;
}
.sidebuttons {
	@apply flex flex-col px-2 divide-y-2 divide-dark dark:divide-light border-l-2 border-dark dark:border-light;
}

.scale-enter-active {
	animation: scale 0.3s ease-in-out;
}
.scale-leave-active {
	animation: scale 0.3s reverse ease-in-out;
}
@keyframes scale {
	0% {
		max-height: 0;
	}
	100% {
		max-height: 8rem;
	}
}
</style>
