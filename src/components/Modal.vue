<template>
	<div
		class="absolute top-0 left-0 right-0 bottom-0 bg-dark bg-opacity-20 dark:bg-white dark:bg-opacity-20 z-50"
	>
		<div
			class="flex flex-col max-w-md mt-48 mx-auto p-6 bg-light dark:bg-dark rounded shadow-theme"
		>
			<slot />

			<div class="self-end flex items-center gap-4 mt-12">
				<slot name="buttons" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>
