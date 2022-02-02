<template>
	<router-link
		:to="monthLink"
		class="w-96 h-48 p-2 border-2 border-dark dark:border-light rounded"
	>
		<div
			class="w-full pt-1 pb-3 text-center text-xl font-semibold border-b-2 border-dark dark:border-light"
			:class="{
				'text-light-accent dark:text-dark-accent': isCurrentMonth
			}"
		>
			{{ getMonthName(props.month) }}
		</div>
		<ul class="flex flex-col mt-2 p-4">
			<li class="flex justify-between">
				<div
					class="text-emerald-700 dark:text-emerald-500 transition-default"
				>
					Income
				</div>
				<div
					class="text-emerald-700 dark:text-emerald-500 transition-default"
				>
					{{ summary.TotalIncome.toFixed(2) }}
				</div>
			</li>
			<li
				class="flex justify-between pb-3 border-b border-dark dark:border-light"
			>
				<div class="text-red-700 dark:text-red-500 transition-default">
					Expenditure
				</div>
				<div class="text-red-700 dark:text-red-500 transition-default">
					{{ summary.TotalExpenditure.toFixed(2) }}
				</div>
			</li>
			<li class="flex justify-between mt-3">
				<div class="font-semibold">Balance</div>
				<div class="font-semibold">{{ summaryBalance.toFixed(2) }}</div>
			</li>
		</ul>
	</router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useBalanceStore } from '@/store/balance'
import { Balance } from '@/functions/firebase_types'
import { auth } from '@/functions/firebase_setup'

const props = defineProps({
	month: {
		type: Number,
		required: true
	}
})

const store = useBalanceStore()
const { getMonthName, getSummary } = store
const { selectedYear } = storeToRefs(store)
const monthLink = computed(
	() => `/balance/${selectedYear.value}/${props.month}`
)
const isCurrentMonth = computed(() => {
	const currentDate = new Date()
	return currentDate.getMonth() + 1 === props.month
})
const summary = computed(() => {
	const summ = getSummary(props.month)
	if (summ) {
		return summ
	}
	const defaultBalance: Balance = {
		UserId: auth!.currentUser!.uid,
		Year: selectedYear.value,
		Month: props.month,
		TotalExpenditure: 0,
		TotalIncome: 0,
		isDeleted: false
	}
	return defaultBalance
})
const summaryBalance = computed(() => {
	return summary.value.TotalIncome - summary.value.TotalExpenditure
})
</script>
