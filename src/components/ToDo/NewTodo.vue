<template>
	<div class="todo-wrapper flex">
		<textarea
			v-model="state.description"
			class="flex-grow w-full input-text text-dark rounded-none overflow-y-hidden"
			:class="{ 'border-error': v$.description.$error }"
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
import { reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { CheckIcon, XIcon } from '@heroicons/vue/outline'
import { saveTodo } from '@/functions/firebase_todo'
import { useTodoStore } from '@/store/todo'

const state = reactive({ description: '' })
const rules = {
	description: { required }
}
const v$ = useVuelidate(rules, state, { $autoDirty: true })

const todoStore = useTodoStore()
const { newTodo, cancelNewTodo, addTodoToList } = todoStore

const cancelEdit = () => {
	cancelNewTodo()
}
const save = () => {
	const todo = {
		...newTodo,
		Description: state.description
	}
	saveTodo(todo).then((res: any) => {
		addTodoToList(res)
	})
}
</script>
