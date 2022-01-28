<template>
	<ul
		class="fixed bottom-0 left-0 right-0 flex justify-around items-end pt-2 bg-spotify-gray-light"
	>
		<li
			v-for="(menu, i) in menus"
			:key="i"
			class="flex flex-col items-center"
		>
			<component
				:is="menu.icon"
				class="w-5 h-5"
				:class="{
					'fill-white': i === 0,
					'fill-spotify-text-light': i !== 0
				}"
			/>
			<span
				class="text-sm"
				:class="{
					'text-white': i === 0,
					'text-spotify-text-light': i !== 0
				}"
			>
				{{ menu.text }}
			</span>
		</li>
	</ul>
</template>

<script setup lang="ts">
import HomeSVG from '@/components/SVG/Spotify/Home.vue'
import SearchSVG from '@/components/SVG/Spotify/Search.vue'
import LibrarySVG from '@/components/SVG/Spotify/Library.vue'
import SpotifySVG from '@/components/SVG/Spotify/Spotify.vue'

const menus = [
	{
		text: 'Home',
		icon: HomeSVG
	},
	{
		text: 'Search',
		icon: SearchSVG
	},
	{
		text: 'Your library',
		icon: LibrarySVG
	},
	{
		text: 'Get the app',
		icon: SpotifySVG
	}
]
</script>
