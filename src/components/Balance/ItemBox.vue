<template>
	<div
		class="flex flex-col w-96 h-48 p-2 border-2 border-dark dark:border-light rounded"
	>
		<div
			class="flex gap-4 px-2 pt-1 pb-3 font-semibold border-b-2 border-dark dark:border-light"
		>
			<TypeIcon :type="item.Type" />
			<span>{{ item.CustomName }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { BalanceItem } from '@/functions/firebase_types'
import TypeIcon from './TypeIcon.vue'

const props = defineProps({
	item: {
		type: Object as PropType<BalanceItem>,
		required: true
	}
})
</script>
