import { defineStore } from 'pinia'
import { TileValues } from '@/static/enums'

interface State {
	board: TileValues[][]
}

export const useTictactoeStore = defineStore('tictactoe', {
	state: (): State => ({
		board: [
			[TileValues.EMPTY, TileValues.EMPTY, TileValues.EMPTY],
			[TileValues.EMPTY, TileValues.EMPTY, TileValues.EMPTY],
			[TileValues.EMPTY, TileValues.EMPTY, TileValues.EMPTY]
		]
	}),
	getters: {},
	actions: {
		doMove(x: number, y: number, value: TileValues) {
			this.board[x][y] = value
		}
	}
})
