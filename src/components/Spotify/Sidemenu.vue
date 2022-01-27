<template>
	<nav
		id="sidemenu"
		aria-label="Sidemenu"
		class="flex-shrink-0 w-64 px-6 bg-black"
	>
		<LogoSvg class="w-32 h-16 mt-4 fill-white" />
		<Navigation />
	</nav>
</template>

<script setup lang="ts">
import LogoSvg from '@/components/SVG/Spotify/Logo.vue'
import Navigation from './Sidemenu/Navigation.vue'
</script>
