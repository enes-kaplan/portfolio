// store/index.js
import { createStore } from 'vuex'
import session from './modules/session'

const store = createStore({
	modules: {
		session
	}
})

export default store
