import type { Router } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router: Router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		}
	]
})
export default router
