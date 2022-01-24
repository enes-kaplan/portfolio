<template>
	<div class="flex flex-col items-center gap-12 py-24">
		<Board />
		<template v-if="isGameCompleted">
			<span
				v-if="hasPlayerWon"
				class="text-4xl font-semibold font-nunito"
			>
				You have won!
			</span>
			<span
				v-else-if="hasAIWon"
				class="text-4xl font-semibold font-nunito"
			>
				You have lost :(
			</span>
			<span v-else class="text-4xl font-semibold font-nunito">
				It's a draw!
			</span>
			<button
				class="group btn btn-primary text-3xl font-nunito font-semibold border-2 select-none"
				@click="resetBoard"
			>
				<RefreshIcon
					class="w-8 h-8 group-hover:stroke-light dark:group-hover:stroke-dark"
				/>
				Play Again
			</button>
		</template>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTictactoeStore } from '@/store/tictactoe'
import { RefreshIcon } from '@heroicons/vue/outline'
import Board from '@/components/TicTacToe/Board.vue'

const store = useTictactoeStore()
const { resetBoard } = store
const { hasPlayerWon, hasAIWon, isGameCompleted } = storeToRefs(store)
</script>
