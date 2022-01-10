<template>
  <div class="flex flex-col w-screen h-screen scroll-pt-header overflow-y-auto">
		<Header />
		<Content />
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
	} else {
		document.documentElement.classList.remove('dark')
	}
})
</script>
