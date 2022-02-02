<template>
	<Modal>
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
		<template #buttons>
			<button
				class="group btn btn-primary gap-1 font-medium"
				@click="clearEditedItem"
			>
				<XIcon
					class="w-6 h-6 group-hover:stroke-light dark:group-hover:stroke-dark transition-hover"
				/>
				CLOSE
			</button>
			<button
				class="group btn btn-accent gap-1 font-medium"
				@click="saveItem(selectedYear, selectedMonth)"
			>
				<SaveIcon
					class="w-6 h-6 stroke-light-accent dark:stroke-dark-accent group-hover:stroke-dark-accent dark:group-hover:stroke-light-accent"
				/>
				SAVE
			</button>
		</template>
	</Modal>
</template>

<script setup lang="ts">
import { useBalanceStore } from '@/store/balance'
import { storeToRefs } from 'pinia'
import { XIcon, SaveIcon } from '@heroicons/vue/outline'
import ItemTypeSelection from './Month/ItemTypeSelection.vue'
import Modal from '@/components/Modal.vue'

const store = useBalanceStore()
const { clearEditedItem, saveItem } = store
const { selectedYear, selectedMonth, editedItem } = storeToRefs(store)
</script>
