import { Timestamp } from 'firebase/firestore'
import { TodoStatus, BalanceType } from '@/static/enums'

export interface Todo {
	Id?: string
	UserId?: string
	Status?: TodoStatus
	Title?: string
	Description?: string
	CreateDate?: Timestamp
	UpdateDate?: Timestamp
}

export interface BalanceItem {
	Id?: string
	Type: BalanceType
	CustomName: string
	Amount: number
	Note: string
	Order: number
	CreateDate: Timestamp
	UpdateDate: Timestamp
	isDeleted: boolean
}

export interface Balance {
	Id?: string
	UserId: string
	Year: number
	Month: number
	TotalIncome: number
	TotalExpenditure: number
	isDeleted: boolean
}
