<template>
	<AuthorizedContent @authorized="getItems">
		<div class="flex justify-center my-8 font-semibold text-2xl">
			{{ monthName }} {{ year }}
		</div>
		<ItemButtons :year="yearNum" :month="monthNum" />
		<ItemTable :items="itemsOfMonth" />
	</AuthorizedContent>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBalanceStore } from '@/store/balance'
import { storeToRefs } from 'pinia'
import AuthorizedContent from '@/components/layout/AuthorizedContent.vue'
import ItemTable from '@/components/Balance/ItemTable.vue'
import ItemButtons from '@/components/Balance/ItemButtons.vue'

const router = useRouter()
const store = useBalanceStore()
const { getMonthName, getItemsOfMonth } = store
const { itemsOfMonth } = storeToRefs(store)

const yearNum = ref(new Date().getFullYear())
const monthNum = ref(new Date().getMonth())

const year = ref('')
const monthName = ref('')

const getItems = () => {
	const routeParams = router.currentRoute.value.params
	const monthParam = parseInt(<string>routeParams.month)
	const yearParam = parseInt(<string>routeParams.year)

	yearNum.value = yearParam
	monthNum.value = monthParam

	monthName.value = getMonthName(monthParam)
	year.value = yearParam.toString()

	getItemsOfMonth(yearParam, monthParam)
}
</script>
