import type { Router } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Auth from '../pages/Auth.vue'
import ToDo from '../pages/ToDo.vue'

const router: Router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/auth',
			component: Auth
		},
		{
			path: '/todo',
			component: ToDo
		}
	]
})
export default router
