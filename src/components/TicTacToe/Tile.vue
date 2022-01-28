<template>
	<div
		class="flex justify-center items-center text-5xl border border-dark dark:border-light transition-all duration-300 ease-out"
		:class="{
			'shadow-hover': tileVal === TileValues.EMPTY
		}"
	>
		<CrossSVG
			v-if="tileVal === TileValues.X"
			class="w-12 h-12 fill-light-accent hover:fill-light-accent dark:fill-dark-accent transition-all duration-300 ease-out"
		/>
		<CircleSVG
			v-else-if="tileVal === TileValues.O"
			class="w-12 h-12 transition-all duration-300 ease-out"
		/>
		<button
			v-else
			class="w-full h-full"
			aria-label="Mark the tile"
			@click="markTile"
		/>
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

<style scoped>
.shadow-hover:hover {
	box-shadow: inset 0 4px 40px 0 rgb(3 105 161 / 0.5);
}
.dark .shadow-hover:hover {
	box-shadow: inset 0 4px 40px 0 rgb(234 179 8 / 0.5);
}
</style>
