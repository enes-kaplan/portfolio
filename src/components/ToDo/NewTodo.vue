<template>
	<div class="todo-wrapper flex">
		<textarea
			v-model="description"
			class="flex-grow w-full input-text text-dark rounded-none"
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
import store from '@/store/index'
import { ref } from 'vue'
import { CheckIcon, XIcon } from '@heroicons/vue/outline'
import { saveTodo } from '@/functions/firebase_todo'

const description = ref('')

const cancelEdit = () => {
	store.commit('cancelNewTodo')
}
const save = () => {
	const todo = {
		...store.state.todo.newTodo,
		Description: description.value
	}
	saveTodo(todo).then((res: any) => {
		todo.Id = res.id
		store.commit('addTodoToList', todo)
	})
}
</script>
