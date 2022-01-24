<template>
	<section
		id="landing"
		class="flex flex-col sm:flex-row-reverse justify-around w-4/5 min-h-content mx-auto py-12"
	>
		<div class="flex flex-col gap-4 wh-icon">
			<img
				src="/avatar_tiger.png"
				width="256"
				height="256"
				class="object-contain"
				alt="landing-logo-tiger"
				referrerpolicy="no-referrer"
			/>
			<div
				class="flex justify-center items-center gap-2 w-full text-center font-semibold text-opacity-80"
			>
				<img
					src="/flag_tr.png"
					width="24"
					height="24"
					alt="Turkish flag"
				/>
				Kaplan = Tiger
				<img
					src="/flag_en.png"
					width="24"
					height="24"
					alt="English flag"
				/>
			</div>
		</div>
		<div class="flex flex-col justify-between max-w-xl my-auto">
			<div class="flex flex-col gap-6 mt-4">
				<h1 class="text-light-accent dark:text-dark-accent">
					Hi there! I'm Enes.
				</h1>
				<h2>
					I'm a software developer who creates rich web applications.
				</h2>
				<p class="sm:text-2xl sm:leading-relaxed">
					I'm a passionate computer engineer located in Turkey who
					strives to deliver web applications that are accessible,
					maintainable and usable. I like reading 📖, travelling 🗺️
					and playing videogames 🎮. I also work on side projects at
					times ⌨️.
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

<script setup lang="ts"></script>

<style scoped>
.min-h-content {
	min-height: calc(100vh - 5rem);
}
.wh-icon {
	min-width: 12rem;
	max-width: 16rem;
	max-height: 100%;
	margin: auto;
}
</style>
