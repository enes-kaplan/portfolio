<template>
	<button v-if="currentTheme === 'light'" @click="setTheme('dark')">
		<SunIcon class="w-8 h-8" />
	</button>
	<button v-else>
		<MoonIcon class="w-8 h-8" @click="setTheme('light')" />
	</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/outline'

const currentTheme = ref(localStorage.theme)

const setTheme = (theme: string) => {
	currentTheme.value = theme
	localStorage.theme = theme
	if (theme === 'dark') {
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
	}
}
</script>
