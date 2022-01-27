import type { Router } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ToDo from '../pages/ToDo.vue'
import TicTacToe from '../pages/TicTacToe.vue'

const router: Router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/todo',
			component: ToDo
		},
		{
			path: '/tictactoe',
			component: TicTacToe
		}
	]
})

export default router
