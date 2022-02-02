<template>
	<AuthorizedContent @authorized="getItems">
		<div class="flex justify-center my-8 font-semibold text-2xl">
			{{ monthName }} {{ selectedYear }}
		</div>
		<ItemButtons />
		<ItemTable :items="itemsOfMonth" />
	</AuthorizedContent>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useBalanceStore } from '@/store/balance'
import AuthorizedContent from '@/components/layout/AuthorizedContent.vue'
import ItemTable from '@/components/Balance/Month/ItemTable.vue'
import ItemButtons from '@/components/Balance/Month/ItemButtons.vue'

const router = useRouter()
const store = useBalanceStore()
const { getMonthName, getItemsOfMonth } = store
const { selectedYear, selectedMonth, itemsOfMonth } = storeToRefs(store)

const monthName = ref('')
const getItems = () => {
	const routeParams = router.currentRoute.value.params
	const monthParam = parseInt(<string>routeParams.month)
	const yearParam = parseInt(<string>routeParams.year)

	selectedYear.value = yearParam
	selectedMonth.value = monthParam
	monthName.value = getMonthName(monthParam)

	getItemsOfMonth(yearParam, monthParam)
}
</script>
