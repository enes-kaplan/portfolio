<template>
	<div
		class="flex justify-between px-2 pt-1 pb-3 font-semibold border-b-2 border-dark dark:border-light"
	>
		<div class="flex items-center gap-4">
			<TypeIcon :type="item.Type" />
			<span>{{ item.CustomName }}</span>
		</div>
		<div class="relative">
			<button
				aria-label="Show options"
				@click="showOptions = !showOptions"
			>
				<DotsHorizontalIcon class="w-6 h-6" />
			</button>
			<ul
				class="absolute top-full right-0 flex flex-col w-32 bg-indigo-100 dark:bg-gray-500 border border-indigo-300 dark:border-gray-600 rounded shadow-theme transition-default transform overflow-hidden"
				:class="{
					'translate-y-0': showOptions,
					'translate-y-6 opacity-0': !showOptions
				}"
				role="menu"
				:aria-hidden="showOptions === true"
			>
				<li>
					<button class="btn-option" @click="editItem">
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
		</div>
	</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { BalanceItem } from '@/functions/firebase_types'
import { ref } from 'vue'
import {
	DotsHorizontalIcon,
	PencilAltIcon,
	TrashIcon
} from '@heroicons/vue/outline'
import TypeIcon from './TypeIcon.vue'

const props = defineProps({
	item: {
		type: Object as PropType<BalanceItem>,
		required: true
	}
})

const showOptions = ref(false)
const editItem = () => {}
const deleteItem = () => {}
</script>

<style scoped>
.btn-option {
	@apply flex items-center gap-4 w-full p-2 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600;
}
</style>
