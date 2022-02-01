<template>
	<div
		class="flex flex-col w-96 h-48 p-2 border-2 border-dark dark:border-light rounded"
	>
		<ItemHeader :item="item" />
	</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { BalanceItem } from '@/functions/firebase_types'
import ItemHeader from './ItemHeader.vue'

const props = defineProps({
	item: {
		type: Object as PropType<BalanceItem>,
		required: true
	}
})
</script>
