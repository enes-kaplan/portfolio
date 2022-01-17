<template>
	<div
		class="min-h-[6rem] border border-dark dark:border-light rounded shadow-md dark:shadow-sm dark:shadow-light"
	>
		<transition-group
			name="fade"
			tag="div"
			class="relative w-full min-h-[6rem]"
		>
			<div
				v-if="!inEditMode"
				class="flex absolute top-0 left-0 right-0 bottom-0"
			>
				<div class="flex-grow flex flex-col h-full px-4 py-2">
					<p class="flex-grow">
						{{ todo.Description }}
					</p>
					<div class="text-xs text-opacity-75">
						Created at {{ CreateDateF }}
					</div>
				</div>
				<div class="sidebuttons">
					<button
						class="flex-grow"
						aria-label="Edit todo"
						@click="startEdit(todo)"
					>
						<PencilIcon class="w-6 h-6" />
					</button>
					<button
						class="flex-grow"
						aria-label="Delete todo"
						@click="deleteTodo(todo)"
					>
						<TrashIcon class="w-6 h-6" />
					</button>
				</div>
			</div>
			<div v-else class="flex absolute top-0 left-0 right-0 bottom-0">
				<textarea
					v-model="description"
					class="flex-grow w-full input-text text-dark rounded-none"
					rows="4"
				/>
				<div class="sidebuttons">
					<button
						class="flex-grow"
						aria-label="Save changes"
						@click="save"
					>
						<CheckIcon class="w-6 h-6" />
					</button>
					<button
						class="flex-grow"
						aria-label="Cancel changes"
						@click="cancelEdit"
					>
						<XIcon class="w-6 h-6" />
					</button>
				</div>
			</div>
		</transition-group>
	</div>
</template>

<script setup lang="ts">
import store from '@/store/index'
import { ref, computed } from 'vue'
import { PencilIcon, TrashIcon, CheckIcon, XIcon } from '@heroicons/vue/outline'
import { saveTodo, deleteTodo } from '@/functions/firebase_todo'

const props = defineProps({
	todo: {
		type: Object, // Type: DocumentData of Todo
		required: true
	}
})

const CreateDateF = computed(() => {
	const todoDate: Date = props.todo.CreateDate.toDate()
	return `${
		todoDate.getMonth() + 1
	}/${todoDate.getDate()}/${todoDate.getFullYear()}`
})

const inEditMode = ref(false)
const description = ref('')
const startEdit = (todo: any) => {
	description.value = todo.Description
	inEditMode.value = true
}
const save = () => {
	saveTodo(props.todo, description.value)
	const updatedTodo = { ...props.todo, Description: description.value }
	store.commit('updateTodo', updatedTodo)
	inEditMode.value = false
}
const cancelEdit = () => {
	inEditMode.value = false
}
</script>

<style scoped>
.sidebuttons {
	@apply flex flex-col px-2 divide-y-2 divide-dark dark:divide-light border-l-2 border-dark dark:border-light;
}

.fade {
	@apply relative;
}
.fadeInner {
	@apply flex absolute top-0 left-0 right-0 bottom-0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
