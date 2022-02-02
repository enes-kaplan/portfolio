<template>
	<div class="flex justify-center gap-4 my-8">
		<button
			class="btn btn-primary text-red-700 hover:text-red-500 dark:text-red-500 dark:hover:text-red-700"
			@click="addItem(true)"
		>
			Add new expense
		</button>
		<button
			class="btn btn-primary text-emerald-700 hover:text-emerald-500 dark:text-emerald-500 dark:hover:text-emerald-700"
			@click="addItem(false)"
		>
			Add new income
		</button>
	</div>
	<teleport to="body">
		<transition name="fade">
			<ItemModal v-if="editedItem" :year="year" :month="month" />
		</transition>
	</teleport>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBalanceStore } from '@/store/balance'
import ItemModal from './ItemModal.vue'

const props = defineProps({
	year: {
		type: Number,
		required: true
	},
	month: {
		type: Number,
		required: true
	}
})

const store = useBalanceStore()
const { createNewItem } = store
const { editedItem } = storeToRefs(store)

const addItem = (isExpenditure: boolean) => {
	createNewItem(isExpenditure)
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
