<template>
	<div
		class="flex justify-center items-center text-5xl border border-dark dark:border-light"
	>
		<CircleSVG
			v-if="tileVal === TileValues.O"
			class="w-12 h-12 fill-light-accent dark:fill-dark-accent"
		/>
		<CrossSVG v-else-if="tileVal === TileValues.X" class="w-12 h-12" />
	</div>
</template>

<script setup lang="ts">
import { TileValues } from '@/static/enums'
import CircleSVG from '@/components/SVG/Circle.vue'
import CrossSVG from '@/components/SVG/Cross.vue'

const props = defineProps({
	tileVal: {
		type: Number,
		required: true
	}
})
</script>
