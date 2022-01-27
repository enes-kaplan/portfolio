<template>
	<ul class="flex flex-col gap-4 mt-8">
		<li
			v-for="(menu, i) in menuList"
			:key="i"
			class="sidemenu-row transition-hover"
		>
			<component :is="menu.icon" class="fill-white" />
			<span class="sidemenu-text">
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
