<template>
	<div class="min-h-[6rem] border border-dark dark:border-light rounded">
		<transition-group
			name="fade"
			tag="div"
			class="relative w-full min-h-[6rem]"
		>
			<div
				v-if="!inEditMode"
				class="flex absolute top-0 left-0 right-0 bottom-0"
			>
				<div class="flex-grow px-4 py-2">
					{{ todo.Description }}
				</div>
				<div class="sidebuttons">
					<button class="flex-grow" @click="startEdit(todo)">
						<PencilIcon class="w-6 h-6" />
					</button>
					<button class="flex-grow" @click="deleteTodo">
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
					<button class="flex-grow" @click="saveTodo">
						<CheckIcon class="w-6 h-6" />
					</button>
					<button class="flex-grow" @click="cancelEdit">
						<XIcon class="w-6 h-6" />
					</button>
				</div>
			</div>
		</transition-group>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PencilIcon, TrashIcon, CheckIcon, XIcon } from '@heroicons/vue/outline'

const props = defineProps({
	todo: {
		type: Object, // Type: DocumentData of Todo
		required: true
	}
})

const inEditMode = ref(false)
const description = ref('')
const startEdit = (todo: any) => {
	description.value = todo.Description
	inEditMode.value = true
}

const deleteTodo = () => {}
const cancelEdit = () => {
	inEditMode.value = false
}
const saveTodo = () => {}
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
