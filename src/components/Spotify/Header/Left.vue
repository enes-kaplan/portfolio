<template>
	<div class="flex items-center gap-6">
		<router-link
			to="/"
			aria-label="Back"
			class="p-1 bg-spotify-darker rounded-full"
		>
			<ArrowSVG />
		</router-link>
		<button
			class="p-1 bg-spotify-darker rounded-full disabled:opacity-75 disabled:cursor-not-allowed"
			aria-label="Next"
			disabled
		>
			<ArrowSVG class="transform rotate-180" />
		</button>
	</div>
</template>

<script setup lang="ts">
import ArrowSVG from '@/components/SVG/Spotify/Arrow.vue'
</script>
