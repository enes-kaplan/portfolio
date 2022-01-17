<template>
	<div
		class="border border-dark dark:border-light rounded pb-6 shadow dark:shadow-light overflow-y-auto noScrollbar"
	>
		<h2 class="sticky top-0 bg-light dark:bg-dark w-full px-4 pt-4">
			{{ statusTitle }}
		</h2>
		<div class="flex flex-col gap-6 mt-6 px-6">
			<Todo v-for="(todo, i) in todos" :key="i" :todo="todo" />
		</div>
	</div>
</template>

<script setup lang="ts">
import store from '@/store/index'
import { computed } from 'vue'
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
</script>
