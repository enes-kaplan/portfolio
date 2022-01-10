<template>
	<div class="fixed top-0 left-0 right-0 flex justify-between items-center h-header px-8 bg-light dark:bg-gray-700 border-b border-gray-400 transition-colors duration-300">
		<router-link to="/" class="text-3xl font-nunito font-extrabold select-none">
			TEST
		</router-link>
		<HeaderRight :current-theme="currentTheme" @set-theme="setTheme" />
		<HeaderRightMobile :current-theme="currentTheme" @set-theme="setTheme" />
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
</script>
