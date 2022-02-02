<template>
	<Modal>
		<div
			class="mx-auto font-bold text-4xl text-light-accent dark:text-dark-accent"
		>
			Warning!
		</div>
		<span class="mt-8 text-center"
			>Are you sure you want to delete this item?</span
		>
		<template #buttons>
			<button
				class="group btn btn-primary gap-1 font-medium"
				@click="closeModal"
			>
				<XIcon
					class="w-6 h-6 group-hover:stroke-light dark:group-hover:stroke-dark transition-hover"
				/>
				CLOSE
			</button>
			<button
				class="btn gap-1 font-medium text-red-500 border border-red-500 bg-light"
				@click="deleteItem"
			>
				<TrashIcon class="w-6 h-6 stroke-red-500" />
				DELETE
			</button>
		</template>
	</Modal>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { BalanceItem } from '@/functions/firebase_types'
import { storeToRefs } from 'pinia'
import { useBalanceStore } from '@/store/balance'
import Modal from '@/components/Modal.vue'
import { XIcon, TrashIcon } from '@heroicons/vue/outline'

const props = defineProps({
	item: {
		type: Object as PropType<BalanceItem>,
		required: true
	}
})

const store = useBalanceStore()
const { deleteBalanceItem } = store
const { selectedYear, selectedMonth } = storeToRefs(store)

const emit = defineEmits(['close'])
const closeModal = () => {
	emit('close')
}
const deleteItem = () => {
	deleteBalanceItem(
		{ ...props.item },
		selectedYear.value,
		selectedMonth.value
	)
}
</script>
