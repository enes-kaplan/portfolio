<template>
	<div
		class="grid grid-rows-3 grid-cols-3 w-64 h-64 border border-dark dark:border-light transition-colors duration-300 ease-out"
	>
		<template v-for="(row, i) in board" :key="index">
			<template v-for="(tileVal, j) in row" :key="index">
				<Tile :tile-val="tileVal" />
			</template>
		</template>
	</div>
</template>

<script setup lang="ts">
import { TileValues } from '@/static/enums'
import Tile from './Tile.vue'

const board = [
	[TileValues.EMPTY, TileValues.EMPTY, TileValues.EMPTY],
	[TileValues.EMPTY, TileValues.EMPTY, TileValues.EMPTY],
	[TileValues.EMPTY, TileValues.EMPTY, TileValues.EMPTY]
]
</script>
