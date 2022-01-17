// store/index.js
import { createStore } from 'vuex'
import session from './modules/session'
import todo from './modules/todo'

const store = createStore({
	modules: {
		session,
		todo
	}
})

export default store
