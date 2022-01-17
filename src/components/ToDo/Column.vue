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
				<div v-if="!inEditMode" class="flex-grow p-4">
					{{ todo.Description }}
				</div>
				<div v-else class="flex-grow p-4 w-full">
					<textarea
						v-model="todo.Description"
						class="w-full input-text text-dark"
						rows="4"
					/>
				</div>
				<div
					class="flex flex-col px-2 divide-y-2 divide-dark dark:divide-light border-l border-dark dark:border-light"
				>
					<template v-if="!inEditMode">
						<button class="flex-grow" @click="startEdit">
							<PencilIcon class="w-6 h-6" />
						</button>
						<button class="flex-grow" @click="deleteTodo">
							<TrashIcon class="w-6 h-6" />
						</button>
					</template>
					<template v-else>
						<button class="flex-grow">
							<CheckIcon class="w-6 h-6" />
						</button>
						<button class="flex-grow">
							<XIcon class="w-6 h-6" />
						</button>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import store from '@/store/index'
import { ref, computed } from 'vue'
import { PencilIcon, TrashIcon, CheckIcon, XIcon } from '@heroicons/vue/outline'

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

let inEditMode = ref(false)
const startEdit = () => {
	inEditMode.value = true
}

const deleteTodo = () => {}
</script>
