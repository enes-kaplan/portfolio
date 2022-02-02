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
			<button class="btn btn-primary" @click="clearEditedItem">
				CLOSE
			</button>
			<button class="btn btn-accent" @click="saveItem(year, month)">
				SAVE
			</button>
		</template>
	</Modal>
</template>

<script setup lang="ts">
import { useBalanceStore } from '@/store/balance'
import { storeToRefs } from 'pinia'
import ItemTypeSelection from './ItemTypeSelection.vue'
import Modal from '@/components/Modal.vue'

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
