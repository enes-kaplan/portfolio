import type { Balance, BalanceItem } from '@/functions/firebase_types'
import { defineStore } from 'pinia'
import { Timestamp } from 'firebase/firestore'
import { BalanceType } from '@/static/enums'
import {
	getSummariesOfYear,
	getItemsOfMonth,
	isExpenditure,
	saveItem,
	deleteItem
} from '@/functions/firebase_balance'

interface State {
	selectedYear: number
	selectedMonth: number
	summariesOfYear: Balance[]
	itemsOfMonth: BalanceItem[]
	editedItem?: BalanceItem
	isExpenditure: boolean
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
		selectedMonth: new Date().getMonth() + 1,
		summariesOfYear: [],
		itemsOfMonth: [],
		editedItem: undefined,
		isExpenditure: false
	}),
	getters: {
		getSummary: state => (month: number) => {
			return state.summariesOfYear.find(
				f => f.Year === state.selectedYear && f.Month === month
			)
		},
		getMonthName: () => (month: number) => {
			return monthNames[month - 1]
		},
		getTypeName: () => (type: BalanceType) => {
			switch (type) {
				case BalanceType.ELECTRICITY:
					return 'Electricity'
				case BalanceType.WATER:
					return 'Water'
				case BalanceType.GAS:
					return 'Gas'
				case BalanceType.INTERNET:
					return 'Internet'
				case BalanceType.PHONE:
					return 'Phone'
				case BalanceType.RENT:
					return 'Rent'
				case BalanceType.CREDIT:
					return 'Credit Card'
				case BalanceType.MARKET:
					return 'Market'
				case BalanceType.EXPENDITURE:
					return 'Other Expense'
				case BalanceType.SALARY:
					return 'Salary'
				case BalanceType.INCOME:
					return 'Other Income'
				default:
					return 'Other'
			}
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
		},
		createNewItem(isExpenditure: boolean) {
			this.isExpenditure = isExpenditure
			const currentTimestamp = Timestamp.fromDate(new Date())
			this.editedItem = {
				Type: isExpenditure
					? BalanceType.ELECTRICITY
					: BalanceType.SALARY,
				CustomName: isExpenditure
					? this.getTypeName(BalanceType.ELECTRICITY)
					: this.getTypeName(BalanceType.SALARY),
				Amount: 0,
				Note: '',
				Order: 1,
				CreateDate: currentTimestamp,
				UpdateDate: currentTimestamp,
				isDeleted: false
			}
		},
		editItem(item: BalanceItem) {
			this.isExpenditure = isExpenditure(item.Type)
			this.editedItem = { ...item }
		},
		async saveItem(year: number, month: number) {
			const initialId = this?.editedItem?.Id
			const item = await saveItem(this.editedItem!, year, month)
			if (item) {
				if (initialId) {
					let itemIndex = this.itemsOfMonth.findIndex(
						f => f.Id === initialId
					)
					this.itemsOfMonth.splice(itemIndex, 1, item)
				} else {
					this.itemsOfMonth.push(item)
				}
				this.clearEditedItem()
			}
		},
		clearEditedItem() {
			this.editedItem = undefined
		},
		async deleteBalanceItem(
			item: BalanceItem,
			year: number,
			month: number
		) {
			item.isDeleted = false
			const deletedItem = await deleteItem(item, year, month)
			if (deletedItem) {
				this.itemsOfMonth = this.itemsOfMonth.filter(
					f => f.Id !== item.Id
				)
			}
			this.clearEditedItem()
		}
	}
})
