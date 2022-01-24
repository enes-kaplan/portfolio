<template>
	<div
		class="flex justify-center items-center text-5xl border border-dark dark:border-light"
	>
		<CrossSVG
			v-if="tileVal === TileValues.X"
			class="w-12 h-12 fill-light-accent hover:fill-light-accent dark:fill-dark-accent"
		/>
		<CircleSVG v-else-if="tileVal === TileValues.O" class="w-12 h-12" />
		<button v-else class="w-full h-full" @click="markTile" />
	</div>
</template>

<script setup lang="ts">
import { TileValues } from '@/static/enums'
import { useTictactoeStore } from '@/store/tictactoe'
import CircleSVG from '@/components/SVG/Circle.vue'
import CrossSVG from '@/components/SVG/Cross.vue'

const { playerMove } = useTictactoeStore()

const props = defineProps({
	tileVal: {
		type: Number,
		required: true
	},
	x: {
		type: Number,
		required: true
	},
	y: {
		type: Number,
		required: true
	}
})

const markTile = () => {
	playerMove(props.x, props.y)
}
</script>
