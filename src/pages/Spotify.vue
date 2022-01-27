<template>
	<div class="flex w-screen h-screen overflow-hidden">
		<Sidemenu />
		<div class="flex-grow flex flex-col h-screen">
			<Header />
			<Content />
		</div>
	</div>
</template>

<script setup lang="ts">
import Sidemenu from '@/components/Spotify/Sidemenu.vue'
import Header from '@/components/Spotify/Header.vue'
import Content from '@/components/Spotify/Content.vue'
</script>

<style>
/** This is for Firefox */
.spotifyScrollbar {
	scrollbar-color: #5a5a5a white;
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
	background-color: #5a5a5a;
}
</style>
