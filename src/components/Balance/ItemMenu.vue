<template>
	<ul
		class="absolute top-full right-0 flex flex-col w-32 bg-indigo-100 dark:bg-gray-500 border-2 border-indigo-300 dark:border-gray-400 rounded shadow-theme transition-default transform overflow-hidden z-10"
		:class="{
			'translate-y-0': showOptions,
			'translate-y-6 opacity-0': !showOptions
		}"
		role="menu"
		:aria-hidden="showOptions === false"
	>
		<li>
			<button class="btn-option" @click="edit">
				<PencilAltIcon class="w-6 h-6" />
				<span>Edit</span>
			</button>
		</li>
		<li>
			<button class="btn-option" @click="deleteItem">
				<TrashIcon class="w-6 h-6" />
				<span>Delete</span>
			</button>
		</li>
	</ul>
	<teleport to="body">
		<transition name="fade">
			<DeleteModal
				v-if="showModal"
				:item="item"
				@close="showModal = false"
			/>
		</transition>
	</teleport>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { BalanceItem } from '@/functions/firebase_types'
import { ref } from 'vue'
import { useBalanceStore } from '@/store/balance'
import { PencilAltIcon, TrashIcon } from '@heroicons/vue/outline'
import DeleteModal from './DeleteModal.vue'

const props = defineProps({
	showOptions: {
		type: Boolean,
		required: true
	},
	item: {
		type: Object as PropType<BalanceItem>,
		required: true
	}
})
const emit = defineEmits(['close'])

const store = useBalanceStore()
const { editItem } = store

const edit = () => {
	editItem(props.item)
	emit('close')
}

const showModal = ref(false)
const deleteItem = () => {
	showModal.value = true
	emit('close')
}
</script>

<style scoped>
.btn-option {
	@apply flex items-center gap-4 w-full p-2 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600;
}
</style>
