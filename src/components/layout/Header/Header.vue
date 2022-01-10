<template>
	<div class="fixed top-0 left-0 right-0 flex justify-between items-center h-header px-8 bg-light dark:bg-gray-700 border-b border-gray-400 transition-colors duration-300">
		<router-link to="/" class="text-3xl font-nunito font-extrabold select-none">
			TEST
		</router-link>
		<ul class="hidden sm:flex flex-row-reverse items-center gap-4">
			<li>
				<Theme />
			</li>
			<li>
				<button to="/#contact" class="hover:underline" @click="scrollIntoView('contact')">
					Contact Me
				</button>
			</li>
			<li>
				<button to="/#projects" class="hover:underline" @click="scrollIntoView('projects')">
					Projects
				</button>
			</li>
		</ul>
		<button
			id="list-icon"
			class="flex sm:hidden active:outline outline-gray-600 transition-transform duration-300"
			:class="{ '-translate-x-48': isMenuOpen }"
			@click="changeMenu(!isMenuOpen)"
		>
			<ViewListIcon class="w-8 h-8" />
		</button>
		<div
			class="fixed right-0 top-0 bottom-0 w-48 px-4 py-8 border-l border-gray-400 bg-light dark:bg-gray-800 transition-transform duration-300"
			:class="{ 'translate-x-0': isMenuOpen, 'translate-x-48': !isMenuOpen }"
		>
			<ul class="flex flex-col gap-2">
				<li class="flex items-center gap-2">
					<Theme is-sidemenu />
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ViewListIcon } from '@heroicons/vue/outline'
import Theme from './Theme.vue'

const scrollIntoView = (id: string) => {
	const el = document.getElementById(id)
	el?.scrollIntoView({ behavior: 'smooth' })
}

const isMenuOpen = ref(false)
const changeMenu = (isOpen: boolean) => {
	isMenuOpen.value = isOpen
}
</script>
