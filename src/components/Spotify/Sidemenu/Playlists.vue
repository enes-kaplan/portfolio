<template>
	<ul class="flex-grow bg-red-500s overflow-y-auto spotifyScrollbar">
		<li
			v-for="(playlist, i) in playlists"
			:key="i"
			class="sidemenu-row transition-hover cursor-default py-1"
		>
			<span class="sidemenu-text text-sm font-light truncate">
				{{ playlist }}
			</span>
		</li>
	</ul>
</template>

<script setup lang="ts">
const playlists = [
	'Favourites',
	'Office',
	'Maximum Concentration of Maxitude',
	'Work-out',
	'Chilling',
	'Classical',
	'Movie soundtracks',
	'Liked from Radio'
]
</script>
