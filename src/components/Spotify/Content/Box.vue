<template>
	<div
		class="flex flex-col p-4 bg-spotify-dark hover:bg-spotify-gray rounded cursor-pointer"
	>
		<img
			:src="content.image"
			class="w-40 h-40"
			:class="{
				'rounded-full': content.isCircle,
				'rounded-lg': !content.isCircle
			}"
			alt="Content image"
		/>
		<span class="text-lg font-semibold mt-6">
			{{ content.title }}
		</span>
		<span class="text-sm text-spotify-text-light">
			{{ content.description }}
		</span>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	content: {
		type: Object,
		required: true
	}
})
</script>
