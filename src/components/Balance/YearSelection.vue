<template>
	<div class="flex justify-center items-center gap-4">
		<span class="font-semibold text-lg"> Year </span>
		<select
			:value="selectedYear"
			class="input-text w-32"
			@change="changeYear($event)"
		>
			<option
				v-for="(year, i) in yearList"
				:key="i"
				:value="year"
				class="text-dark"
			>
				{{ year }}
			</option>
		</select>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBalanceStore } from '@/store/balance'

const store = useBalanceStore()
const { yearList, selectedYear } = storeToRefs(store)
const { getSummariesOfYear } = store

const changeYear = (ev: Event) => {
	const inputEl = <HTMLInputElement>ev.target
	const year = inputEl.value ? parseInt(inputEl.value) : selectedYear.value
	if (year !== selectedYear.value) {
		selectedYear.value = year
		getSummariesOfYear(year)
	}
}
</script>
