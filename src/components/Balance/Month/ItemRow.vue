<template>
	<tr>
		<td class="flex justify-center py-4">
			<TypeIcon :type="item.Type" />
		</td>
		<td>
			{{ item.CustomName }}
		</td>
		<td
			class="text-right"
			:class="{
				'text-red-700 dark:text-red-500': isExpenditure(item.Type),
				'text-emerald-700 dark:text-emerald-500': !isExpenditure(
					item.Type
				)
			}"
		>
			<template v-if="isExpenditure(item.Type)">-</template>
			{{ item.Amount }}
		</td>
		<td class="relative flex justify-center">
			<button
				aria-label="Show options"
				:class="{
					'opacity-100': showOptions,
					'opacity-75 hover:opacity-100': !showOptions
				}"
				@click="showOptions = !showOptions"
			>
				<DotsHorizontalIcon
					class="w-6 h-6 hover:stroke-light-accent dark:hover:stroke-dark-accent"
					:class="{
						'stroke-light-accent dark:stroke-dark-accent':
							showOptions
					}"
				/>
			</button>
			<ItemMenu
				:item="item"
				:show-options="showOptions"
				@close="showOptions = false"
			/>
		</td>
	</tr>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { BalanceItem } from '@/functions/firebase_types'
import { ref } from 'vue'
import { isExpenditure } from '@/functions/firebase_balance'
import { DotsHorizontalIcon } from '@heroicons/vue/outline'
import TypeIcon from '../TypeIcon.vue'
import ItemMenu from './ItemMenu.vue'

const props = defineProps({
	item: {
		type: Object as PropType<BalanceItem>,
		required: true
	}
})

const showOptions = ref(false)
</script>
