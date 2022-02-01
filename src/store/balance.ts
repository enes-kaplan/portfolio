import type { Balance, BalanceItem } from '@/functions/firebase_types'
import { defineStore } from 'pinia'
import {
	getSummariesOfYear,
	getItemsOfMonth
} from '@/functions/firebase_balance'

interface State {
	selectedYear: number
	summariesOfYear: Balance[]
	itemsOfMonth: BalanceItem[]
}

const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
]
export const useBalanceStore = defineStore('balance', {
	state: (): State => ({
		selectedYear: new Date().getFullYear(),
		summariesOfYear: [],
		itemsOfMonth: []
	}),
	getters: {
		getSummary: state => (month: number) => {
			return state.summariesOfYear.find(
				f => f.Year === state.selectedYear && f.Month === month
			)
		},
		getMonthName: () => (month: number) => {
			return monthNames[month - 1]
		}
	},
	actions: {
		async getSummariesOfYear() {
			const summariesOfYear = await getSummariesOfYear(this.selectedYear)
			this.summariesOfYear = summariesOfYear ?? []
		},
		async getItemsOfMonth(year: number, month: number) {
			const itemsOfMonth = await getItemsOfMonth(year, month)
			this.itemsOfMonth = itemsOfMonth ?? []
		}
	}
})
