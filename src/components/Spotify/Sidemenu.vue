<template>
	<nav
		id="sidemenu"
		aria-label="Sidemenu"
		class="flex-shrink-0 flex flex-col w-64 px-6 bg-black"
	>
		<LogoSvg class="w-32 h-16 mt-4 fill-white" />
		<Navigation />
		<Actions />
		<hr class="my-6 border-[#282828]" />
		<div
			class="relative flex-grow flex flex-col overflow-y-auto spotifyScrollbar"
		>
			<Playlists />
			<InstallApp />
		</div>
	</nav>
</template>

<script setup lang="ts">
import LogoSvg from '@/components/SVG/Spotify/Logo.vue'
import Navigation from './Sidemenu/Navigation.vue'
import Actions from './Sidemenu/Actions.vue'
import Playlists from './Sidemenu/Playlists.vue'
import InstallApp from './Sidemenu/InstallApp.vue'
</script>

<style>
.sidemenu-row {
	@apply flex items-center gap-4 w-full cursor-pointer opacity-75 hover:opacity-100;
}
.sidemenu-text {
	@apply text-xs font-semibold text-white tracking-wider;
}
</style>
