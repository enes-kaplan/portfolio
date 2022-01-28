<template>
	<div
		class="absolute top-full right-0 flex flex-col p-1 w-52 mt-2 bg-spotify-gray rounded"
	>
		<div
			v-for="(menu, i) in menuList"
			:key="i"
			class="flex justify-between items-center w-full p-2 hover:bg-spotify-gray-light rounded cursor-pointer"
		>
			<span class="text-sm font-nunito font-semibold tracking-wider">
				{{ menu.name }}
			</span>
			<ExtLinkSVG v-if="menu.isExternal" />
		</div>
	</div>
</template>

<script setup lang="ts">
import ExtLinkSVG from '@/components/SVG/Spotify/ExtLink.vue'

const menuList = [
	{
		name: 'Account',
		isExternal: true
	},
	{
		name: 'Profile',
		isExternal: false
	},
	{
		name: 'Premium',
		isExternal: true
	},
	{
		name: 'Support',
		isExternal: true
	},
	{
		name: 'Download',
		isExternal: true
	},
	{
		name: 'Logout',
		isExternal: false
	}
]
</script>
