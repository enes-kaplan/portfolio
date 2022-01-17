<template>
	<div
		class="border border-dark dark:border-light rounde pb-6 shadow dark:shadow-light overflow-y-auto noScrollbar"
	>
		<h2 class="sticky top-0 bg-light dark:bg-dark w-full px-4 pt-4">
			{{ statusTitle }}
		</h2>
		<div class="flex flex-col gap-6 mt-6 px-6">
			<div
				v-for="(todo, i) in todos"
				:key="i"
				class="flex w-full min-h-[6rem] border border-dark dark:border-light rounded"
			>
				<div class="flex-grow p-4">
					{{ todo.Description }}
				</div>
				<div
					class="flex flex-col px-2 divide-y-2 divide-dark dark:divide-light border-l border-dark dark:border-light"
				>
					<button class="flex-grow" @click="editTodo">
						<PencilIcon class="w-6 h-6" />
					</button>
					<button class="flex-grow" @click="deleteTodo">
						<TrashIcon class="w-6 h-6" />
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import store from '@/store/index'
import { computed } from 'vue'
import { PencilIcon, TrashIcon } from '@heroicons/vue/outline'

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

const editTodo = () => {}

const deleteTodo = () => {}
</script>
