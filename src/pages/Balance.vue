<template>
	<AuthorizedContent class="pb-24" @authorized="getSummariesOfYear">
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
import { useBalanceStore } from '@/store/balance'

import AuthorizedContent from '@/components/layout/AuthorizedContent.vue'
import YearSelection from '@/components/Balance/Year/YearSelection.vue'
import MonthBox from '@/components/Balance/Year/MonthBox.vue'

const store = useBalanceStore()
const { getSummariesOfYear } = store
</script>
