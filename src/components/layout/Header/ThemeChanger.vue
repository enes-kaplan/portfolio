<template>
	<button v-if="currentTheme === 'light'" class="flex items-center gap-2" @click="setTheme('dark')">
		<span v-if="isSidemenu">
			Switch Theme
		</span>
		<SunIcon class="w-8 h-8" :class="{ 'w-6 h-6': isSidemenu }" />
	</button>
	<button v-else class="flex items-center gap-2" @click="setTheme('light')">
		<span v-if="isSidemenu">
			Switch Theme
		</span>
		<MoonIcon class="w-8 h-8" :class="{ 'w-6 h-6': isSidemenu }" />
	</button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/outline'

const props = defineProps({
	isSidemenu: {
		type: Boolean,
		required: false,
		default: () => false
	},
	currentTheme: {
		type: String,
		required: true
	}
})
const emit = defineEmits(['setTheme'])

const setTheme = (theme: string) => {
	emit('setTheme', theme)
}
</script>
