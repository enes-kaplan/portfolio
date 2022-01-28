<template>
	<div class="flex flex-col py-12">
		<div class="text-3xl font-bold">{{ section.title }}</div>
		<div v-if="section.description" class="text-sm text-spotify-text-light">
			{{ section.description }}
		</div>
		<div class="flex gap-6 w-full mt-8 overflow-hidden">
			<ContentBox
				v-for="(content, i) in section.sectionContents"
				:key="i"
				:content="content"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import ContentBox from './Box.vue'

const props = defineProps({
	section: {
		type: Object,
		required: true
	}
})
</script>

<style></style>
