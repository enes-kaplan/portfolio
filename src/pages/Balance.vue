<template>
	<AuthorizedContent>
		<h1 class="text-3xl sm:text-5xl text-center my-4">
			💵 Keep track of your income and expenditures 💵
		</h1>
		<YearSelection />
		<div class="flex flex-wrap gap-12 mt-12 px-24">
			<MonthBox v-for="month in 12" :key="month" :month="month" />
		</div>
	</AuthorizedContent>
</template>

<script setup lang="ts">
import AuthorizedContent from '@/components/layout/AuthorizedContent.vue'
import YearSelection from '@/components/Balance/YearSelection.vue'
import MonthBox from '@/components/Balance/MonthBox.vue'

import {
	getSummariesOfYear,
	getSummaryOfMonth,
	getItemsOfMonth,
	saveItem
} from '@/functions/firebase_balance'
import { BalanceItem } from '@/functions/firebase_types'
import { BalanceType } from '@/static/enums'
import { Timestamp } from 'firebase/firestore'

import { storeToRefs } from 'pinia'
import { useBalanceStore } from '@/store/balance'

const store = useBalanceStore()
const { summariesOfYear } = storeToRefs(store)

const currentTimestamp = Timestamp.fromDate(new Date())
const testItem: BalanceItem = {
	Id: 'MvF7QDydLASCpVBddVI1',
	Type: BalanceType.ELECTRICITY,
	CustomName: '',
	Amount: 258.35,
	Note: 'Gaz kullanımı düşürülebilir mi acaba ?',
	Order: 1,
	CreateDate: currentTimestamp,
	UpdateDate: currentTimestamp,
	isDeleted: false
}
</script>
