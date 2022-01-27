<template>
	<ul class="flex flex-col gap-4 mt-8">
		<li class="sidemenu-row transition-hover">
			<div class="flex justify-center items-center">
				<div class="w-6 h-6 p-1 bg-white rounded-xs">
					<PlusSVG class="w-full h-full fill-black" />
				</div>
			</div>
			<span class="text-xs font-semibold text-white">
				Create a playlist
			</span>
		</li>
		<li class="sidemenu-row transition-hover">
			<div class="flex justify-center items-center">
				<div class="w-6 h-6 p-1 bg-heart rounded-xs">
					<HeartSVG class="w-full h-full fill-white" />
				</div>
			</div>
			<span class="text-xs font-semibold text-white"> Liked songs </span>
		</li>
	</ul>
</template>

<script setup lang="ts">
import PlusSVG from '@/components/SVG/Spotify/Plus.vue'
import HeartSVG from '@/components/SVG/Spotify/Heart.vue'
</script>

<style scoped>
.bg-heart {
	background: linear-gradient(135deg, #450af5, #c4efd9);
}
</style>
