<template>
	<table
		class="w-full max-w-table mx-auto border border-dark dark:border-light rounded-lg border-collapse overflow-y-auto tableScrollbar"
	>
		<thead class="border-b-2 border-dark dark:border-light">
			<tr>
				<th class="text-center py-4">Type</th>
				<th class="text-left">Name</th>
				<th class="text-right">Amount</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			<ItemRow v-for="item in items" :key="item.Id" :item="item" />
		</tbody>
	</table>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { BalanceItem } from '@/functions/firebase_types'
import ItemRow from './ItemRow.vue'

const props = defineProps({
	items: {
		type: Object as PropType<BalanceItem[]>,
		required: true
	}
})
</script>

<style>
.max-w-table {
	max-width: 600px;
}
</style>
