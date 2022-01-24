import { defineStore } from 'pinia'
import { TileValues } from '@/static/enums'

interface State {
	board: TileValues[][]
}

const initialRow = [TileValues.EMPTY, TileValues.EMPTY, TileValues.EMPTY]

export const useTictactoeStore = defineStore('tictactoe', {
	state: (): State => ({
		board: [[...initialRow], [...initialRow], [...initialRow]]
	}),
	getters: {
		/**
		 * @param {TileValues} playerTile - The player to check the win condition for
		 * @returns
		 */
		hasWon:
			state =>
			(playerTile: TileValues): boolean => {
				// Horizontal rows
				for (let i = 0; i < 3; i++) {
					if (
						state.board[0][i] === playerTile &&
						state.board[1][i] === playerTile &&
						state.board[2][i] === playerTile
					) {
						return true
					}
				}

				// Vertical rows
				for (let i = 0; i < 3; i++) {
					if (
						state.board[i][0] === playerTile &&
						state.board[i][1] === playerTile &&
						state.board[i][2] === playerTile
					) {
						return true
					}
				}

				if (
					state.board[0][0] === playerTile &&
					state.board[1][1] === playerTile &&
					state.board[2][2] === playerTile
				) {
					return true
				}
				if (
					state.board[0][2] === playerTile &&
					state.board[1][1] === playerTile &&
					state.board[2][0] === playerTile
				) {
					return true
				}

				return false
			},
		hasPlayerWon(): boolean {
			return this.hasWon(TileValues.X)
		},
		hasAIWon(): boolean {
			return this.hasWon(TileValues.O)
		},
		isGameCompleted(): boolean {
			return this.hasPlayerWon || this.hasAIWon
		},
		getPossibleMoves: state => {
			let moves = []
			for (let x = 0; x < 3; x++) {
				for (let y = 0; y < 3; y++) {
					if (state.board[x][y] === TileValues.EMPTY) {
						moves.push({ x, y })
					}
				}
			}
			return moves
		}
	},
	actions: {
		doMove(x: number, y: number, value: TileValues) {
			this.board[x][y] = value
		},
		playerMove(x: number, y: number) {
			this.doMove(x, y, TileValues.X)
			this.aiMove()
		},
		aiMove() {
			// TODO: Calculate AI move with the minimax algorithm
		},
		resetBoard() {
			this.board = [[...initialRow], [...initialRow], [...initialRow]]
		}
	}
})
