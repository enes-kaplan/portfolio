<template>
	<div id="info" class="flex flex-col-reverse sm:flex-row-reverse justify-around w-4/5 h-screen mx-auto">
		<BeakerIcon class="wh-icon my-auto stroke-emerald-600 dark:stroke-emerald-400 transition-colors duration-300" />
		<div class="flex flex-col justify-between max-w-xl h-4/5 my-auto">
			<div>
				<h1 class="text-5xl sm:text-7xl font-bold">
					Hello World!
				</h1>
				<h2 class="mt-3 font-semibold">
					Lorem Ipsum Dolor Sit Amet!
				</h2>
				<p class="mt-6 text-sm font-light sm:text-xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BeakerIcon } from '@heroicons/vue/outline'
</script>

<style scoped>
.wh-icon {
	min-width: 12rem;
	max-width: 24rem;
	max-height: 80%;
}
h2 {
	font-size: 2rem;
}
</style>
