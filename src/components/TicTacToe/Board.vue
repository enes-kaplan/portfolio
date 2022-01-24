<template>
	<div
		class="grid grid-rows-3 grid-cols-3 w-64 min-w-64 h-64 min-h-[16rem] border border-dark dark:border-light transition-colors duration-300 ease-out"
		:class="{
			'bg-emerald-300 dark:bg-emerald-600': hasPlayerWon,
			'bg-red-400 dark:bg-red-500 ': hasAIWon
		}"
	>
		<template v-for="(row, x) in board" :key="index">
			<template v-for="(tileVal, y) in row" :key="index">
				<Tile :tile-val="tileVal" :x="x" :y="y" />
			</template>
		</template>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Tile from './Tile.vue'
import { useTictactoeStore } from '@/store/tictactoe'

const store = useTictactoeStore()
const { board, hasPlayerWon, hasAIWon } = storeToRefs(store)
</script>
