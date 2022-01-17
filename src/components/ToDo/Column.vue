<template>
	<div
		class="border border-dark dark:border-light rounded pb-6 shadow dark:shadow-light overflow-y-auto noScrollbar"
	>
		<div
			class="sticky top-0 flex justify-between bg-light dark:bg-dark w-full px-4 py-4 border-b border-dark dark:border-light"
		>
			<h2>
				{{ statusTitle }}
			</h2>
			<button aria-label="Add new todo" @click="addNew">
				<PlusIcon class="w-6 h-6" />
			</button>
		</div>
		<div class="flex flex-col gap-6 mt-6 px-6">
			<Todo v-for="(todo, i) in todos" :key="i" :todo="todo" />
		</div>
	</div>
</template>

<script setup lang="ts">
import store from '@/store/index'
import { computed } from 'vue'
import { PlusIcon } from '@heroicons/vue/outline'
import Todo from './Todo.vue'

const props = defineProps({
	status: {
		type: Number, // Type: ToDoStatus enum
		required: true
	}
})

const statusTitle = store.getters.getStatusText(props.status)
const todos = computed(() => {
	return store.getters.getTodoByStatus(props.status)
})
const addNew = () => {}
</script>
