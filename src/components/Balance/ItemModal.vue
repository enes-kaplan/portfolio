<template>
	<div
		class="absolute top-0 left-0 right-0 bottom-0 bg-dark bg-opacity-20 dark:bg-white dark:bg-opacity-20 z-50"
	>
		<div
			class="flex flex-col max-w-md mt-48 mx-auto p-6 bg-light dark:bg-dark rounded shadow-theme"
		>
			<ItemTypeSelection />
			<div class="flex flex-col my-4">
				<label class="input-label" for="name"> Name </label>
				<input
					v-model="editedItem!.CustomName"
					id="name"
					type="text"
					class="input-text text-dark"
				/>
			</div>
			<div class="flex flex-col my-4">
				<label class="input-label" for="amount"> Amount </label>
				<input
					v-model="editedItem!.Amount"
					id="amount"
					type="number"
					class="input-text text-dark"
				/>
			</div>
			<div class="flex flex-col my-4">
				<label class="input-label" for="note"> Note </label>
				<input
					v-model="editedItem!.Note"
					id="note"
					type="text"
					class="input-text text-dark"
				/>
			</div>
			<div class="self-end flex gap-4 mt-12">
				<button class="btn btn-primary" @click="clearEditedItem">
					CLOSE
				</button>
				<button class="btn btn-accent" @click="saveItem(year, month)">
					SAVE
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useBalanceStore } from '@/store/balance'
import { storeToRefs } from 'pinia'
import ItemTypeSelection from './ItemTypeSelection.vue'

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
const { clearEditedItem, saveItem } = store
const { editedItem } = storeToRefs(store)
</script>
