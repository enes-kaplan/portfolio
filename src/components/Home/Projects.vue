<template>
	<section id="projects" class="flex flex-col items-center gap-12 py-12">
		<h1>Sample Projects</h1>
		<router-link
			v-for="(project, i) in projects"
			:to="project.demoLink"
			:key="i"
			class="w-1/3 min-w-project pb-6 rounded overflow-hidden dark:bg-dark dark:text-dark-font border border-dark dark:border-light transition-all duration-200 ease-out hover:translate-x-0.5 hover:translate-y-0.5 shadow-theme-hover"
		>
			<img
				:src="project.image"
				:alt="`Project image for ${project.name}`"
				class="dark:hidden w-full max-h-48 object-cover border-b border-opacity-50 border-dark dark:border-light"
			/>
			<img
				:src="project.imageDark"
				:alt="`Project image for ${project.name}`"
				class="hidden dark:block w-full max-h-48 object-cover border-b border-opacity-50 border-dark dark:border-light"
			/>
			<div class="mt-4 px-8 text-center text-3xl font-semibold">
				{{ project.name }}
			</div>
			<p class="mt-2 px-8 text-lg">
				{{ project.description }}
			</p>
		</router-link>
	</section>
</template>

<script setup lang="ts">
const projects = [
	{
		name: 'To-do Project',
		image: '/todo_light.jpg',
		imageDark: '/todo_dark.jpg',
		description: 'To-do project to keep track of your list of tasks.',
		demoLink: '/todo'
	},
	{
		name: 'Tic-Tac-Toe',
		image: '/Project2.jpg',
		imageDark: '/Project2.jpg',
		description: 'Play tic-tac-toe against AI using minimax algorithm.',
		demoLink: '/tictactoe'
	}
]
</script>

<style scoped>
.min-w-project {
	min-width: 16rem;
}
.action-link {
	@apply flex-grow flex justify-center items-center gap-2 py-2 border-0 rounded-none;
}
</style>
