<template>
	<main
		class="w-full h-full px-8 bg-spotify-darker overflow-y-auto spotifyScrollbar"
	>
		<ContentSection
			v-for="(section, i) in contentSections"
			:key="i"
			:section="section"
		/>
	</main>
</template>

<script setup lang="ts">
import ContentSection from './Content/Section.vue'

const contentSections = [
	{
		title: 'Recently played',
		description: '',
		content: [
			{
				title: 'First Aid Kit',
				description: 'Artist',
				image: '/spotify/firstaidkit.jpg',
				isCircle: true
			}
		]
	},
	{
		title: 'Shows you might like',
		description: '',
		content: [
			{
				title: '',
				description: '',
				image: '',
				isCircle: true
			}
		]
	},
	{
		title: 'Recommended radio',
		description: 'Non-stop music based on your favorite songs and artists.',
		content: [
			{
				title: '',
				description: '',
				image: '',
				isCircle: true
			}
		]
	},
	{
		title: 'Best of artists',
		description: 'Bringing together the top songs from an artist.',
		content: [
			{
				title: '',
				description: '',
				image: '',
				isCircle: true
			}
		]
	}
]
</script>
