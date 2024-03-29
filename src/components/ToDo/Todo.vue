<template>
	<div
		class="todo-wrapper min-h-[6rem] select-none"
		:id="`draggable_${todo.Id}`"
		:class="{ 'cursor-grab': isDraggable === true && !inEditMode }"
		:draggable="isDraggable === true && !inEditMode"
		@dragstart="setDragData"
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
					<div class="flex justify-between items-baseline w-full">
						<p class="text-xs text-opacity-75">
							Created at {{ CreateDateF }}
						</p>
						<select
							:value="props.todo.Status"
							class="sm:hidden input-text px-1 py-0"
							@input="changeStatus($event)"
						>
							<option :value="TodoStatus.TODO" class="text-dark">
								{{ getStatusText(TodoStatus.TODO) }}
							</option>
							<option
								:value="TodoStatus.IN_PROGRESS"
								class="text-dark"
							>
								{{ getStatusText(TodoStatus.IN_PROGRESS) }}
							</option>
							<option :value="TodoStatus.DONE" class="text-dark">
								{{ getStatusText(TodoStatus.DONE) }}
							</option>
						</select>
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
						@click="deleteItem"
					>
						<TrashIcon class="w-6 h-6" />
					</button>
				</div>
			</div>
			<div v-else class="flex absolute top-0 left-0 right-0 bottom-0">
				<textarea
					v-model="state.description"
					class="flex-grow w-full input-text text-dark rounded-none"
					:class="{ 'border-error': v$.description.$error }"
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
import { ref, reactive, computed, PropType } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useTodoStore } from '@/store/todo'
import { PencilIcon, TrashIcon, CheckIcon, XIcon } from '@heroicons/vue/outline'
import { saveTodo, deleteTodo } from '@/functions/firebase_todo'
import { TodoStatus } from '@/static/enums'
import { Todo } from '@/functions/firebase_types'

const todoStore = useTodoStore()
const { getStatusText, updateTodo } = todoStore
const props = defineProps({
	todo: {
		type: Object as PropType<Todo>,
		required: true
	},
	isInEdit: {
		type: Boolean,
		required: false,
		default: () => false
	},
	isDraggable: {
		type: Boolean,
		required: true
	}
})

const state = reactive({ description: '' })
const rules = {
	description: { required }
}
const v$ = useVuelidate(rules, state, { $autoDirty: true })

const CreateDateF = computed(() => {
	const createDate = props.todo.CreateDate?.toDate()
	return `${createDate!.getMonth() + 1}/
	${createDate!.getDate()}/
	${createDate!.getFullYear()}`
})

const inEditMode = ref(props.isInEdit)
const startEdit = (todo: any) => {
	state.description = todo.Description
	inEditMode.value = true
}
const save = () => {
	const updatedTodo = { ...props.todo, Description: state.description }
	updateTodo(updatedTodo)
	saveTodo(updatedTodo)
	inEditMode.value = false
}
const deleteItem = () => {
	const updatedTodo = { ...props.todo, Status: TodoStatus.DELETED }
	updateTodo(updatedTodo)
	deleteTodo(props.todo)
}
const cancelEdit = () => {
	inEditMode.value = false
}

const setDragData = (ev: DragEvent) => {
	if (ev && ev.dataTransfer) {
		ev.dataTransfer.setData('text/plain', props.todo.Id!)
		ev.dataTransfer.effectAllowed = 'move'
	}
}
const changeStatus = (ev: Event) => {
	const inputEl = <HTMLInputElement>ev.target
	const Status = inputEl.value ? parseInt(inputEl.value) : TodoStatus.TODO
	if (Status !== props.todo.Status) {
		const updatedTodo = { ...props.todo, Status }
		updateTodo(updatedTodo)
		saveTodo(updatedTodo)
	}
}
</script>

<style scoped>
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
