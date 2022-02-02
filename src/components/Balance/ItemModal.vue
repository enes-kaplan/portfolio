<template>
	<div
		class="absolute top-0 left-0 right-0 bottom-0 bg-dark bg-opacity-20 dark:bg-white dark:bg-opacity-20 z-50"
	>
		<div
			class="flex flex-col max-w-md mt-48 mx-auto p-6 bg-light dark:bg-dark border border-dark rounded shadow-theme"
		>
			<ItemTypeSelection />
			<div class="self-end flex gap-4 mt-12">
				<button class="btn btn-primary" @click="clearEditedItem">
					CLOSE
				</button>

				<div class="flex">
					<button class="btn btn-accent" @click="clearEditedItem">
						SAVE
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useBalanceStore } from '@/store/balance'
import ItemTypeSelection from './ItemTypeSelection.vue'

const store = useBalanceStore()
const { clearEditedItem } = store
</script>
