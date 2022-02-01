<template>
	<div
		class="flex flex-col w-96 h-48 p-2 border-2 border-dark dark:border-light rounded"
	>
		<ItemHeader :item="item" />
		<ul class="flex flex-col mt-2 p-4">
			<li class="flex justify-between">
				<div>Type</div>
				<div
					class="transition-default"
					:class="{
						'text-red-700 dark:text-red-500': isExpenditure(
							item.Type
						),
						'text-emerald-700 dark:text-emerald-500':
							!isExpenditure(item.Type)
					}"
				>
					{{ itemText }}
				</div>
			</li>
			<li class="flex justify-between">
				<div>Amount</div>
				<div>{{ item.Amount }}</div>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { BalanceItem } from '@/functions/firebase_types'
import { computed } from 'vue'
import { isExpenditure } from '@/functions/firebase_balance'
import ItemHeader from './ItemHeader.vue'

const props = defineProps({
	item: {
		type: Object as PropType<BalanceItem>,
		required: true
	}
})

const itemText = computed(() =>
	isExpenditure(props.item.Type) ? 'Expense' : 'Income'
)
</script>
