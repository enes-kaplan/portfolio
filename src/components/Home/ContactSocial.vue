<template>
	<section
		id="contact-social"
		class="fixed left-4 top-header bottom-1/3 mt-10 flex flex-col justify-between w-10 my-auto"
	>
		<a
			v-for="(link, i) in links"
			:key="i"
			:href="link.to"
			:aria-label="link.label"
			class="w-8"
			target="_blank"
			rel="noopener"
		>
			<component
				:is="link.component"
				class="w-full h-full hover:fill-light-accent dark:hover:fill-dark-accent"
			/>
		</a>
	</section>
</template>

<script setup lang="ts">
import LinkedInSVG from '@/components/SVG/LinkedIn.vue'
import TwitterSVG from '@/components/SVG/Twitter.vue'
import GithubSVG from '@/components/SVG/Github.vue'

const links = [
	{
		label: 'LinkedIn',
		to: 'https://www.linkedin.com/in/enes-kaplan-000b91133/',
		component: LinkedInSVG
	},
	{
		label: 'Twitter',
		to: 'https://www.twitter.com/EnesKaplan1994',
		component: TwitterSVG
	},
	{
		label: 'Github',
		to: 'https://github.com/enes-kaplan',
		component: GithubSVG
	}
]
</script>
