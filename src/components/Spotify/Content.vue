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
		sectionContents: [
			{
				title: 'First Aid Kit',
				description: 'Artist',
				image: '/spotify/firstaidkit.jpg',
				isCircle: true
			},
			{
				title: 'Linkin Park',
				description: 'Artist',
				image: '/spotify/linkinpark.jpg',
				isCircle: true
			}
		]
	},
	{
		title: 'Shows you might like',
		description: '',
		sectionContents: [
			{
				title: '',
				description: '',
				image: '/spotify/potacast.jpg',
				isCircle: false
			}
		]
	},
	{
		title: 'Recommended radio',
		description: 'Non-stop music based on your favorite songs and artists.',
		sectionContents: [
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
		sectionContents: [
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
