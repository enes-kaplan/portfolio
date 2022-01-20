import { Timestamp } from 'firebase/firestore'
import { TodoStatus } from '@/static/enums'

export interface Todo {
	Id?: string
	UserId?: string
	Status?: TodoStatus
	Title?: string
	Description?: string
	CreateDate?: Timestamp
	UpdateDate?: Timestamp
}
