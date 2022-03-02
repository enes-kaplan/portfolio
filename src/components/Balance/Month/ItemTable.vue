<template>
	<table
		class="w-full max-w-table mx-auto mb-12 bg-gray-100 dark:bg-gray-600 rounded-lg"
	>
		<thead
			class="border-b-2 border-dark dark:border-light border-opacity-40 dark:border-opacity-40"
		>
			<tr>
				<th class="text-center py-4">Type</th>
				<th class="text-left">Name</th>
				<th class="text-right">Amount</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			<template v-if="items.length > 0">
				<ItemRow v-for="item in items" :key="item.Id" :item="item" />
			</template>
			<tr>
				<td colspan="4" class="py-4 text-center font-medium">
					No expense/income registered yet.
				</td>
			</tr>
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
	max-width: min(600px, 90vw);
}
</style>
