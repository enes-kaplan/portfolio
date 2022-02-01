<template>
	<div class="bg-emerald-700 text-white w-32 h-32">
		{{ getSummary(props.month) }}
	</div>
</template>

<script setup lang="ts">
import { useBalanceStore } from '@/store/balance'

const props = defineProps({
	month: {
		type: Number,
		required: true
	}
})

const store = useBalanceStore()
const { getSummary } = store
</script>
