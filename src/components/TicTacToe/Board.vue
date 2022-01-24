<template>
	<div
		class="grid grid-rows-3 grid-cols-3 w-64 h-64 border border-dark dark:border-light transition-colors duration-300 ease-out"
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
const { board } = storeToRefs(store)
</script>
