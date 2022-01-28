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
				title: 'Potacast',
				description: 'Socrates Dergi, Orkun Çolakoğlu, Kaan Kura',
				image: '/spotify/potacast.jpg',
				isCircle: false
			},
			{
				title: 'Dr.RedPill',
				description: 'Dr.RedPill',
				image: '/spotify/drredpill.jpg',
				isCircle: false
			},
			{
				title: 'Codefiction Podcast',
				description: 'Codefiction Community',
				image: '/spotify/codefiction.jpg',
				isCircle: false
			},
			{
				title: 'Philosophize This!',
				description: 'Stephen West',
				image: '/spotify/philosophize.jpg',
				isCircle: false
			}
		]
	},
	{
		title: 'Recommended radio',
		description: 'Non-stop music based on your favorite songs and artists.',
		sectionContents: [
			{
				title: 'Daily Mix 1',
				description: 'Egypt Central, Linkin Park, Downplay and...',
				image: '/spotify/mix1.jpg',
				isCircle: false
			},
			{
				title: 'Daily Mix 2',
				description: 'Dorothy, Black Rebel Motorcycle Club,...',
				image: '/spotify/mix2.jpg',
				isCircle: false
			},
			{
				title: 'Daily Mix 3',
				description: "Blackmore's Night, Karliene, Lunatica...",
				image: '/spotify/mix3.jpg',
				isCircle: false
			},
			{
				title: 'Daily Mix 4',
				description: 'Borislav Slavov, Video Games Live, Vomitro...',
				image: '/spotify/mix4.jpg',
				isCircle: false
			},
			{
				title: 'Daily Mix 5',
				description: 'Watsky, Hoodie Allen, TomPepe...',
				image: '/spotify/mix5.jpg',
				isCircle: false
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
