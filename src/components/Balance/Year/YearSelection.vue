<template>
	<div class="flex justify-center items-center gap-4">
		<div class="flex items-center gap-4">
			<button
				title="Go to previous year"
				aria-label="Previous year"
				@click="changeYear(-1)"
			>
				<ChevronLeftIcon class="w-8 h-8" />
			</button>
			<div class="font-semibold text-2xl">
				{{ selectedYear }}
			</div>
			<button
				title="Go to next year"
				aria-label="Next year"
				@click="changeYear(1)"
			>
				<ChevronRightIcon class="w-8 h-8" />
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBalanceStore } from '@/store/balance'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/outline'

const store = useBalanceStore()
const { selectedYear } = storeToRefs(store)
const { getSummariesOfYear } = store

const changeYear = (increment: number) => {
	selectedYear.value = selectedYear.value + increment
	getSummariesOfYear()
}
</script>
