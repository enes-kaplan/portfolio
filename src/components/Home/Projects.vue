<template>
	<div id="projects" class="flex flex-col items-center gap-12 py-12">
		<div
			v-for="(project, i) in projects"
			:key="i"
			class="w-1/3 min-w-project rounded overflow-hidden
			bg-light text-light-font dark:bg-dark dark:text-dark-font border border-dark dark:border-light
			transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-lg dark:hover:shadow-gray-500"
		>
			<img :src="project.image" class="w-full max-h-48 object-cover">
			<h3 class="mt-4 px-8 text-center text-3xl font-semibold">
				{{ project.name }}
			</h3>
			<p class="mt-2 px-8 text-lg">
				{{ project.description }}
			</p>
			<div class="flex w-full mt-4 border-t border-dark dark:border-light divide-x divide-dark dark:divide-light">
				<router-link :to="project.demoLink" class="action-link group">
					<ExternalLinkIcon class="w-6 h-6 group-hover:stroke-light dark:group-hover:stroke-dark" />
					Demo
				</router-link>
				<a v-if="project.githubLink" :href="project.githubLink" target="_blank" class="action-link group">
					<BeakerIcon class="w-6 h-6 group-hover:stroke-light dark:group-hover:stroke-dark" />
					GitHub
				</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ExternalLinkIcon, BeakerIcon } from '@heroicons/vue/outline'

const projects = [
	{
		name: 'Project 1',
		image: '/Project1.jpg',
		description: 'Demo project to practice Vue 3.',
		demoLink: '/project1',
		githubLink: 'https://github.com/enes-kaplan'
	},
	{
		name: 'Project 2',
		image: '/Project2.jpg',
		description: 'Demo icon project to showcase the component.',
		demoLink: '/project2',
		githubLink: 'https://github.com/enes-kaplan'
	}
]
</script>

<style scoped>
.min-w-project {
	min-width: 16rem;
}
.action-link {
	@apply flex-grow flex justify-center items-center gap-2 py-2 hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark;
}
</style>
