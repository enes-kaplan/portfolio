<template>
	<div>
		<SunIcon class="w-8 h-8" />
	</div>
</template>

<script setup lang="ts">
import { SunIcon } from '@heroicons/vue/outline'

// Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')
</script>
