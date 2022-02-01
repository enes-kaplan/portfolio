<template>
	<AuthorizedContent @authorized="getItems">
		<div class="flex flex-wrap gap-12 w-full p-24">
			<ItemBox v-for="item in itemsOfMonth" :key="item.Id" :item="item" />
		</div>
	</AuthorizedContent>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useBalanceStore } from '@/store/balance'
import { storeToRefs } from 'pinia'
import AuthorizedContent from '@/components/layout/AuthorizedContent.vue'
import ItemBox from '@/components/Balance/ItemBox.vue'

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
