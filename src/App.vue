<template>
  <div class="relative flex flex-col w-screen h-screen">
		<Header />
		<Content />
		<div class="theme-ripple" />
	</div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onBeforeMount } from 'vue'
import Header from '@/components/layout/Header/Header.vue'
import Content from '@/components/layout/Content.vue'

onBeforeMount(() => {
	// On page load or when changing themes, best to add inline in `head` to avoid FOUC
	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		document.documentElement.classList.add('dark')
		document.documentElement.classList.remove('light')
	} else {
		document.documentElement.classList.add('light')
		document.documentElement.classList.remove('dark')
	}
})
</script>

<style scoped>
.theme-ripple {
	@apply absolute block top-12 right-12 rounded-full transition-shadow duration-300 ease-linear;
	width: 2px;
	height: 2px;
	z-index: -99 !important;
	box-shadow: 0 0 0 max(100vh, 100vw) white;
	transition-delay: 0;
}
.dark .theme-ripple {
	background: white;
	box-shadow: 0 0 0 0 white;
}
</style>
