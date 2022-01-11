<template>
	<div id="landing" class="flex flex-col-reverse sm:flex-row-reverse justify-around w-4/5 h-content mx-auto">
		<BeakerIcon class="wh-icon my-auto stroke-emerald-600 dark:stroke-emerald-400 transition-colors duration-300" />
		<div class="flex flex-col justify-between max-w-xl my-auto">
			<div class="flex flex-col gap-6 mt-4">
				<h1 class="text-4xl sm:text-7xl font-semibold sm:font-bold">
					Hello World!
				</h1>
				<h2 class="text-xl sm:text-3xl font-semibold">
					Lorem Ipsum Dolor Sit Amet!
				</h2>
				<p class="text-sm font-light sm:text-xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>
			<button class="mt-8 px-4 py-2 text-lg font-semibold text-light-font dark:text-dark-font rounded border-2
			border-dark hover:bg-dark hover:text-dark-font
			dark:border-light dark:hover:bg-light dark:hover:text-light-font"
			>
				Get In Touch
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BeakerIcon } from '@heroicons/vue/outline'
</script>

<style scoped>
.h-content {
	height: calc(100vh - 5rem);
}
.wh-icon {
	min-width: 12rem;
	max-width: 16rem;
	max-height: 80%;
	margin: auto;
}
</style>
