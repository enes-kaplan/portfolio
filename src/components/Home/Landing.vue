<template>
	<section
		id="landing"
		class="flex flex-col-reverse sm:flex-row-reverse justify-around w-4/5 min-h-content mx-auto pt-8 sm:pt-0"
	>
		<BeakerIcon
			class="wh-icon my-auto stroke-light-accent dark:stroke-dark-accent transition-colors duration-300"
		/>
		<div class="flex flex-col justify-between max-w-xl my-auto">
			<div class="flex flex-col gap-6 mt-4">
				<h1 class="text-light-accent dark:text-dark-accent">
					Hi there! I'm Enes.
				</h1>
				<h2>I'm a software developer who creates websites</h2>
				<p class="sm:text-2xl sm:leading-relaxed">
					I'm a passionate computer engineer located in Turkey who
					strives to deliver web applications that are accessible,
					maintainable and usable. I like reading 📖, travelling 🗺️
					and playing videogames 🎮. I also work on side projects at
					times 🌐.
				</p>
			</div>
			<a
				href="mailto:eneskaplan94@hotmail.com"
				class="btn-primary mt-8 text-center text-lg font-semibold border-2 select-none"
			>
				Get In Touch
			</a>
		</div>
	</section>
</template>

<script setup lang="ts">
import { BeakerIcon } from '@heroicons/vue/outline'
</script>

<style scoped>
.min-h-content {
	min-height: calc(100vh - 5rem);
}
.wh-icon {
	min-width: 12rem;
	max-width: 16rem;
	max-height: 80%;
	margin: auto;
}
</style>
