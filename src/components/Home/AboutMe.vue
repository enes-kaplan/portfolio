<template>
	<section
		id="about"
		class="flex flex-col sm:flex-row sm:justify-between sm:items-center w-4/5 mx-auto mt-24"
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
					class="rounded-lg border-2 border-dark dark:border-light select-none pointer-events-none"
				/>
			</div>
			<h1>About Me.</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat.
			</p>
			<p>
				Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
			<p>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
				quae ab illo inventore veritatis et quasi architecto beatae
				vitae dicta sunt explicabo.
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
