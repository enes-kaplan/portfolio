<template>
	<div class="relative flex flex-col w-screen h-screen">
		<Header />
		<Content />
		<div class="theme-ripple" />
	</div>
</template>

<script setup lang="ts">
import Header from '@/components/layout/Header/Header.vue'
import Content from '@/components/layout/Content.vue'
import '@/functions/firebase_setup'
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
