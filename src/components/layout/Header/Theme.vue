<template>
	<button v-if="currentTheme === 'light'" class="flex items-center gap-2" @click="setTheme('dark')">
		<SunIcon class="w-8 h-8" :class="{ 'w-6 h-6': isSidemenu }" />
		<span v-if="isSidemenu">
			Switch Theme
		</span>
	</button>
	<button v-else class="flex items-center gap-2" @click="setTheme('light')">
		<MoonIcon class="w-8 h-8" :class="{ 'w-6 h-6': isSidemenu }" />
		<span v-if="isSidemenu">
			Switch Theme
		</span>
	</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/outline'

const props = defineProps({
	isSidemenu: {
		type: Boolean,
		required: false,
		default: () => false
	}
})

const currentTheme = ref(localStorage.theme)

const setTheme = (theme: string) => {
	currentTheme.value = theme
	localStorage.theme = theme
	if (theme === 'dark') {
		document.documentElement.classList.add('dark')
		document.documentElement.classList.remove('light')
	} else {
		document.documentElement.classList.add('light')
		document.documentElement.classList.remove('dark')
	}
}
</script>
