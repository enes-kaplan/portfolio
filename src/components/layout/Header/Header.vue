<template>
	<div
		class="fixed top-0 left-0 right-0 flex justify-between items-center h-header px-8 bg-light dark:bg-gray-700 border-b border-gray-400 shadow-theme transition-colors duration-300 z-10"
	>
		<router-link to="/" @click="scrollToTop">
			<span class="text-shadow-theme text-header">Enes</span>
			<br />
			<span class="text-shadow-theme text-header pl-4">Kaplan</span>
		</router-link>
		<HeaderRight :current-theme="currentTheme" @set-theme="setTheme" />
		<HeaderRightMobile
			:current-theme="currentTheme"
			@set-theme="setTheme"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { scrollIntoView } from '@/functions/common'
import HeaderRight from './HeaderRight.vue'
import HeaderRightMobile from './HeaderRightMobile.vue'

const currentTheme = ref(localStorage.theme)
const setTheme = (theme: string) => {
	currentTheme.value = theme
	localStorage.theme = theme
	if (theme === 'dark') {
		document.documentElement.classList.add('dark')
		document.documentElement.classList.remove('light')
	} else {
		document.documentElement.classList.add('light')
		document.documentElement.classList.remove('dark')
	}
}

const scrollToTop = () => {
	scrollIntoView('landing')
}
</script>

<style scoped>
.text-shadow-theme {
	@apply text-light-accent dark:text-dark-accent;
	text-shadow: 1px 1px 1px #000, 0 2px 4px #0369a1;
}
.text-header {
	@apply text-4xl font-nunito font-extrabold select-none;
}
.dark .text-shadow-theme {
	text-shadow: 1px 1px 1px #000, 0 2px 4px #eab308;
}
</style>
