import { defineStore } from 'pinia'
import { TileValues } from '@/static/enums'

interface State {
	board: TileValues[][]
}

const initialRow = [TileValues.EMPTY, TileValues.EMPTY, TileValues.EMPTY]
const doMove = (
	board: TileValues[][],
	x: number,
	y: number,
	value: TileValues
) => {
	board[x][y] = value
}
const hasPlayerWonBoard = (board: TileValues[][], playerTile: TileValues) => {
	// Horizontal rows
	for (let i = 0; i < 3; i++) {
		if (
			board[0][i] === playerTile &&
			board[1][i] === playerTile &&
			board[2][i] === playerTile
		) {
			return true
		}
	}

	// Vertical rows
	for (let i = 0; i < 3; i++) {
		if (
			board[i][0] === playerTile &&
			board[i][1] === playerTile &&
			board[i][2] === playerTile
		) {
			return true
		}
	}

	if (
		board[0][0] === playerTile &&
		board[1][1] === playerTile &&
		board[2][2] === playerTile
	) {
		return true
	}
	if (
		board[0][2] === playerTile &&
		board[1][1] === playerTile &&
		board[2][0] === playerTile
	) {
		return true
	}

	return false
}
const getAiBoardScore = (board: TileValues[][]) => {
	let score = 0
	// If AI has won, increase the score because it is desirable
	if (hasPlayerWonBoard(board, TileValues.O)) {
		score += 100
	}
	// If player has won, reduce the score because it is undesirable
	if (hasPlayerWonBoard(board, TileValues.X)) {
		score -= 100
	}
	return score
}
const getBoardPossibleMoves = (board: TileValues[][]) => {
	let moves = []
	for (let x = 0; x < 3; x++) {
		for (let y = 0; y < 3; y++) {
			if (board[x][y] === TileValues.EMPTY) {
				moves.push({ x, y })
			}
		}
	}
	return moves
}
const cloneBoard = (board: TileValues[][]) => {
	let boardClone: TileValues[][] = []
	for (let x = 0; x < 3; x++) {
		boardClone.push([])
		for (let y = 0; y < 3; y++) {
			boardClone[x][y] = board[x][y]
		}
	}
	return boardClone
}

export const useTictactoeStore = defineStore('tictactoe', {
	state: (): State => ({
		board: [[...initialRow], [...initialRow], [...initialRow]]
	}),
	getters: {
		/**
		 * @param {TileValues} playerTile - The player to check the win condition for
		 * @returns {boolean} If the specified player has won the game
		 */
		hasWon:
			state =>
			(playerTile: TileValues): boolean => {
				return hasPlayerWonBoard(state.board, playerTile)
			},
		hasPlayerWon(): boolean {
			return this.hasWon(TileValues.X)
		},
		hasAIWon(): boolean {
			return this.hasWon(TileValues.O)
		},
		isGameCompleted(): boolean {
			return (
				this.hasPlayerWon ||
				this.hasAIWon ||
				this.getPossibleMoves.length === 0
			)
		},
		getPossibleMoves: state => {
			return getBoardPossibleMoves(state.board)
		}
	},
	actions: {
		doMove(x: number, y: number, value: TileValues) {
			doMove(this.board, x, y, value)
		},
		playerMove(x: number, y: number) {
			this.doMove(x, y, TileValues.X)
			const bestMove = this.getBestAiMove(this.board, TileValues.O)
			if (bestMove.move) {
				this.doMove(bestMove.move.x, bestMove.move.y, TileValues.O)
			}
		},
		getBestAiMove(
			board: TileValues[][],
			player: TileValues,
			depth = 0
		): { score: number; move: { x: number; y: number } | null } {
			// If game is completed, don't calculate next move
			const possibleMoves = getBoardPossibleMoves(board)
			if (
				hasPlayerWonBoard(board, TileValues.X) ||
				hasPlayerWonBoard(board, TileValues.O) ||
				possibleMoves.length === 0
			) {
				return { score: getAiBoardScore(board) + depth, move: null }
			}

			// The algorithm wants to maximize AI's score and minimize the player's score
			let bestScore = player === TileValues.O ? -1000 : 1000
			let bestMove = null

			// If game is not completed, calculate score for each possible next move, recursively
			for (let i = 0; i < possibleMoves.length; i++) {
				let move = possibleMoves[i]

				const boardClone = cloneBoard(board)

				// Do the next possible move and recursively call this method again
				doMove(boardClone, move.x, move.y, player)
				const nextPlayer =
					player === TileValues.X ? TileValues.O : TileValues.X
				const nextMove = this.getBestAiMove(
					boardClone,
					nextPlayer,
					depth + 1
				)
				if (
					(player === TileValues.O && nextMove.score > bestScore) ||
					(player === TileValues.X && nextMove.score < bestScore)
				) {
					bestScore = nextMove.score
					bestMove = move
				}
			}

			return { score: bestScore, move: bestMove }
		},
		resetBoard() {
			this.board = [[...initialRow], [...initialRow], [...initialRow]]
		}
	}
})
