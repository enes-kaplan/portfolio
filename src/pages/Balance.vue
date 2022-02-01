<template>
	<AuthorizedContent @authorized="getSummariesOfYear(selectedYear)">
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
import { onMounted, nextTick } from 'vue'
import { useBalanceStore } from '@/store/balance'

import AuthorizedContent from '@/components/layout/AuthorizedContent.vue'
import YearSelection from '@/components/Balance/YearSelection.vue'
import MonthBox from '@/components/Balance/MonthBox.vue'

const store = useBalanceStore()
const { selectedYear, getSummariesOfYear } = store
</script>
