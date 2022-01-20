<template>
	<button
		class="flex justify-center items-center active:outline outline-gray-600 transition-transform duration-300"
		aria-label="Change theme"
		@click="switchTheme"
	>
		<SunIcon v-if="currentTheme !== 'dark'" class="w-8 h-8" />
		<MoonIcon v-else class="w-8 h-8" />
	</button>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/outline'

const props = defineProps({
	currentTheme: {
		type: String,
		required: true
	}
})
const emit = defineEmits(['setTheme'])

const switchTheme = () => {
	const theme = props.currentTheme !== 'dark' ? 'dark' : 'light'
	emit('setTheme', theme)
}
</script>
