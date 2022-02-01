<template>
	<router-link
		:to="monthLink"
		class="w-64 h-64 p-2 border-2 border-dark dark:border-light rounded"
	>
		<div
			class="w-full text-center text-xl font-semibold border-b border-dark dark:border-light"
		>
			{{ getMonthName(props.month) }}
		</div>
	</router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useBalanceStore } from '@/store/balance'

const props = defineProps({
	month: {
		type: Number,
		required: true
	}
})

const store = useBalanceStore()
const { getMonthName, getSummary } = store
const { selectedYear } = storeToRefs(store)
const monthLink = computed(() => {
	return `/balance/${selectedYear.value}/${props.month}`
})
</script>
