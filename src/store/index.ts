import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import session from './modules/session'
import todo from './modules/todo'

interface State {
	session: typeof session.state
	todo: typeof todo.state
}
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
	modules: {
		session,
		todo
	}
})

export function useStore() {
	return baseUseStore(key)
}
