<template>
	<ul class="flex flex-col gap-4 mt-8">
		<li
			v-for="(menu, i) in menuList"
			:key="i"
			class="group flex items-center gap-4 w-full cursor-pointer"
		>
			<component
				:is="menu.icon"
				class="fill-spotify-inactive group-hover:fill-white"
			/>
			<span
				class="text-xs font-semibold text-spotify-inactive group-hover:text-white"
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

const menuList = [
	{
		icon: HomeSVG,
		text: 'Home'
	},
	{
		icon: SearchSVG,
		text: 'Search'
	},
	{
		icon: LibrarySVG,
		text: 'Your Library'
	}
]
</script>
