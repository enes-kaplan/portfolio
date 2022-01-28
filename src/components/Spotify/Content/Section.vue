<template>
	<div class="flex flex-col py-12">
		<div class="text-3xl font-bold">{{ section.title }}</div>
		<div v-if="section.description" class="text-sm text-spotify-text-light">
			{{ section.description }}
		</div>
		<div class="flex gap-4 w-full overflow-hidden">
			<ContentBox
				v-for="(item, i) in section.content"
				:key="i"
				:content="item"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	section: {
		type: Object,
		required: true
	}
})
</script>

<style></style>
