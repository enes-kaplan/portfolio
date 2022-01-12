<template>
	<div id="landing" class="flex flex-col-reverse sm:flex-row-reverse justify-around w-4/5 h-content mx-auto">
		<BeakerIcon class="wh-icon my-auto stroke-light-accent dark:stroke-dark-accent transition-colors duration-300" />
		<div class="flex flex-col justify-between max-w-xl my-auto">
			<div class="flex flex-col gap-6 mt-4">
				<h1>
					Hello World!
				</h1>
				<h2>
					Lorem Ipsum Dolor Sit Amet!
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>
			<a
			href="mailto:eneskaplan94@hotmail.com"
			class="btn-primary mt-8 text-center text-lg font-semibold border-2"
			>
				Get In Touch
			</a>
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
