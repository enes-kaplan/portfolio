<template>
	<div class="relative flex items-center gap-12">
		<button
			class="px-8 py-1 font-semibold tracking-widest bg-button border border-white rounded-full transition-hover hover:scale-110"
		>
			UPGRADE
		</button>
		<button
			class="flex items-center gap-3 bg-[#0A0A0A] rounded-full hover:bg-spotify-gray border-2 border-spotify-gray"
			@click="isMenuOpen = !isMenuOpen"
		>
			<img
				src="/profile.jpg"
				class="w-8 h-8 rounded-full"
				alt="Profile avatar"
			/>
			<span class="text-sm font-bold"> Enes Kaplan </span>
			<DropArrowSVG
				class="mr-2 transform"
				:class="{ 'rotate-180': isMenuOpen }"
			/>
		</button>
		<Dropmenu v-if="isMenuOpen" />
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DropArrowSVG from '@/components/SVG/Spotify/DropArrow.vue'
import Dropmenu from './Dropmenu.vue'

const isMenuOpen = ref(false)
</script>
