import type { Router } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '../pages/MainContent.vue'
import Home from '../pages/Home.vue'
import ToDo from '../pages/ToDo.vue'
import TicTacToe from '../pages/TicTacToe.vue'
import Spotify from '../pages/Spotify.vue'
import Balance from '../pages/Balance.vue'
import BalanceMonth from '../pages/BalanceMonth.vue'

const router: Router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: 'root',
			path: '/',
			components: {
				mainContent: MainContent
			},
			children: [
				{
					name: 'homepage',
					path: '/',
					components: {
						main: Home
					}
				},
				{
					name: 'todo',
					path: '/todo',
					components: {
						main: ToDo
					}
				},
				{
					name: 'tictactoe',
					path: '/tictactoe',
					components: {
						main: TicTacToe
					}
				},
				{
					name: 'balance',
					path: '/balance',
					components: {
						main: Balance
					}
				},
				{
					name: 'balance_month',
					path: '/balance/:year/:month',
					components: {
						main: BalanceMonth
					}
				}
			]
		},
		{
			name: 'spotify',
			path: '/spotify',
			components: {
				mainContent: Spotify
			}
		}
	]
})

export default router
