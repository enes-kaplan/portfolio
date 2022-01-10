<template>
	<div class="fixed top-0 left-0 right-0 flex justify-between items-center h-header px-8 bg-white dark:bg-gray-700 border-b border-gray-400 transition-colors duration-300">
		<router-link to="/" class="text-3xl font-nunito font-extrabold select-none">
			Enes Kaplan
		</router-link>
		<ul class="hidden sm:flex flex-row-reverse items-center gap-4">
			<li>
				<Theme />
			</li>
			<li>
				<button to="/#contact" class="hover:underline" @click="scrollIntoView('contact')">
					Contact Me
				</button>
			</li>
			<li>
				<button to="/#projects" class="hover:underline" @click="scrollIntoView('projects')">
					Projects
				</button>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import Theme from './Theme.vue'

const scrollIntoView = (id: string) => {
	const el = document.getElementById(id)
	el?.scrollIntoView({ behavior: 'smooth' })
}
</script>
