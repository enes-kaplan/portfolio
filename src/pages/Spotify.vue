<template>
	<div class="sm:flex hidden w-screen h-screen overflow-hidden">
		<Sidemenu />
		<div class="flex-grow flex flex-col h-screen">
			<Header />
			<Content />
		</div>
	</div>
	<div class="sm:hidden flex flex-col relative">
		<Content class="pb-16" />
		<MobileMenu />
	</div>
</template>

<script setup lang="ts">
import Sidemenu from '@/components/Spotify/Sidemenu.vue'
import MobileMenu from '@/components/Spotify/MobileMenu.vue'
import Header from '@/components/Spotify/Header.vue'
import Content from '@/components/Spotify/Content.vue'
</script>

<style>
/** This is for Firefox */
.spotifyScrollbar {
	scrollbar-color: rgba(255, 255, 255, 0.3) white;
	scrollbar-width: thin;
	@apply transition-all duration-300;
}
/* .spotifyScrollbar::-webkit-scrollbar-track {
	@apply bg-light;
} */
.spotifyScrollbar::-webkit-scrollbar {
	width: 8px;
	height: 4px;
}
.spotifyScrollbar::-webkit-scrollbar-thumb {
	background-color: rgba(255, 255, 255, 0.3);
}
</style>
