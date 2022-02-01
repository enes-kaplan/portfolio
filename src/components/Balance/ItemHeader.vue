<template>
	<div
		class="flex justify-between px-2 pt-1 pb-3 font-semibold border-b-2 border-dark dark:border-light"
	>
		<div class="flex items-center gap-4">
			<TypeIcon :type="item.Type" />
			<span>{{ item.CustomName }}</span>
		</div>
		<div class="relative">
			<button
				aria-label="Show options"
				@click="showOptions = !showOptions"
			>
				<DotsHorizontalIcon class="w-6 h-6" />
			</button>
			<HeaderMenu
				:item="item"
				:show-options="showOptions"
				@close="showOptions = false"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { BalanceItem } from '@/functions/firebase_types'
import { ref } from 'vue'
import { DotsHorizontalIcon } from '@heroicons/vue/outline'
import TypeIcon from './TypeIcon.vue'
import HeaderMenu from './HeaderMenu.vue'

const props = defineProps({
	item: {
		type: Object as PropType<BalanceItem>,
		required: true
	}
})

const showOptions = ref(false)
</script>
