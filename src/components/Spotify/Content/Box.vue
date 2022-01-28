<template>
	<div
		class="group flex flex-col p-4 bg-spotify-dark transition-all duration-300 ease-in-out hover:bg-spotify-gray rounded cursor-pointer"
	>
		<div class="relative w-40 h-40">
			<img
				:src="content.image"
				class="w-full h-full"
				:class="{
					'rounded-full': content.isCircle,
					'rounded-lg': !content.isCircle
				}"
				alt="Content image"
			/>
			<div
				class="absolute bottom-0 right-0 flex justify-center items-center w-10 h-10 bg-[#2FBA58] rounded-full p-1 transition-all duration-300 ease-in-out transform hover:scale-110 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
			>
				<PlaySVG />
			</div>
		</div>
		<span class="text-lg font-semibold mt-6">
			{{ content.title }}
		</span>
		<span class="text-sm text-spotify-text-light">
			{{ content.description }}
		</span>
	</div>
</template>

<script setup lang="ts">
import PlaySVG from '@/components/SVG/Spotify/Play.vue'

const props = defineProps({
	content: {
		type: Object,
		required: true
	}
})
</script>
