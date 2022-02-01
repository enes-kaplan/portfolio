<template>
	<AuthorizedContent @authorized="getItems">
		{{ itemsOfMonth }}
	</AuthorizedContent>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useBalanceStore } from '@/store/balance'
import { storeToRefs } from 'pinia'
import AuthorizedContent from '@/components/layout/AuthorizedContent.vue'

const router = useRouter()
const store = useBalanceStore()
const { getItemsOfMonth } = store
const { itemsOfMonth } = storeToRefs(store)

const getItems = () => {
	const routeParams = router.currentRoute.value.params
	const month = parseInt(<string>routeParams.month)
	const year = parseInt(<string>routeParams.year)
	getItemsOfMonth(year, month)
}
</script>
