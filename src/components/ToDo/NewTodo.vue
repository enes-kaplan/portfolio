<template>
	<div class="todo-wrapper flex">
		<textarea
			v-model="description"
			class="flex-grow w-full input-text text-dark rounded-none overflow-y-hidden"
			rows="4"
		/>
		<div class="sidebuttons">
			<button class="flex-grow" aria-label="Save new todo" @click="save">
				<CheckIcon class="w-6 h-6" />
			</button>
			<button
				class="flex-grow"
				aria-label="Cancel new todo"
				@click="cancelEdit"
			>
				<XIcon class="w-6 h-6" />
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/store/todo'
import { ref } from 'vue'
import { CheckIcon, XIcon } from '@heroicons/vue/outline'
import { saveTodo } from '@/functions/firebase_todo'
import { storeToRefs } from 'pinia'

const todoStore = useTodoStore()
const { newTodo, cancelNewTodo, addTodoToList } = todoStore
const {} = storeToRefs(todoStore)

const description = ref('')

const cancelEdit = () => {
	cancelNewTodo()
}
const save = () => {
	const todo = {
		...newTodo,
		Description: description.value
	}
	saveTodo(todo).then((res: any) => {
		addTodoToList(res)
	})
}
</script>
