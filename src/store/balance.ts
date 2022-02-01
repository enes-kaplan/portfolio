import type { Balance } from '@/functions/firebase_types'
import { defineStore } from 'pinia'
import { getSummariesOfYear } from '@/functions/firebase_balance'

interface State {
	yearList: number[]
	selectedYear: number
	summariesOfYear: Balance[]
}

const yearList = [2022, 2021, 2020, 2019, 2018]
export const useBalanceStore = defineStore('balance', {
	state: (): State => ({
		yearList: yearList,
		selectedYear: yearList[0],
		summariesOfYear: []
	}),
	getters: {
		getSummary: state => (month: number) => {
			return state.summariesOfYear.find(
				f => f.Year === state.selectedYear && f.Month === month
			)
		}
	},
	actions: {
		async getSummariesOfYear(year: number) {
			const summariesOfYear = await getSummariesOfYear(year)
			this.summariesOfYear = summariesOfYear ?? []
		}
	}
})
