<template>
	<section
		id="about"
		class="flex flex-col sm:flex-row sm:justify-between sm:items-center w-4/5 mx-auto py-12"
	>
		<!-- #region About -->
		<div class="flex flex-col gap-6 w-full sm:w-1/2 px-8 items-center">
			<div
				class="transition-all duration-300 hover:translate-x-0.5 hover:translate-y-0.5 shadow-theme-hover"
			>
				<img
					src="/profile.jpg"
					alt="Profile picture"
					width="240"
					height="240"
					class="rounded-lg border-2 border-light-accent dark:border-dark-accent select-none pointer-events-none"
				/>
			</div>
			<h1>About Me.</h1>
			<p>
				Hello, I'm Enes. I am a developer who creates web applications
				with care and love. I have graduated in Computer Engineering in
				2017.
			</p>
			<p>
				I was working on a company before being graduated and I have
				worked with different programming languages and tools since
				then. Started programming by writing backend APIs but loved
				writing frontend more and specialized more in frontend
				development.
			</p>
			<p>
				In my free time, I like spending time with my family 👫, reading
				📖, travelling 🗺️ and playing videogames 🎮. I also work on side
				projects at times ⌨️.
			</p>
		</div>
		<!-- #endregion -->
		<!-- #region Skills -->
		<div class="w-full mt-8 sm:w-1/3 sm:mt-0">
			<p class="text-sm sm:text-xl">
				Some tools, technologies or concepts I'm familiar or have worked
				with:
			</p>
			<div class="flex flex-wrap gap-y-4 mt-4">
				<div
					v-for="(skill, i) in skillList"
					:key="i"
					class="flex items-center gap-2 w-1/2 text-lg"
				>
					<ChevronDoubleRightIcon
						class="flex-shrink-0 min-w-5 w-5 min-h-5 h-5"
					/>
					{{ skill }}
				</div>
			</div>
		</div>
		<!-- #endregion -->
	</section>
</template>

<script setup lang="ts">
import { ChevronDoubleRightIcon } from '@heroicons/vue/outline'

const skillList = [
	'Vue',
	'Tailwind ❤️',
	'NuxtJS',
	'React',
	'Remix',
	'Microsoft SQL',
	'Postgre SQL',
	'C#',
	'ASP.NET',
	'.NET Core',
	'Cypress',
	'JEST'
]
</script>
