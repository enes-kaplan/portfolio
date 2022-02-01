<template>
	<table>
		<thead>
			<tr>
				<th>Type</th>
				<th>Name</th>
				<th>Amount</th>
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
