<template>
	<ul class="hidden sm:flex flex-row items-center gap-4">
		<li>
			<button class="hover:underline" @click="scrollIntoView('landing')">
				Info
			</button>
		</li>
		<li>
			<button class="hover:underline" @click="scrollIntoView('about')">
				About Me
			</button>
		</li>
		<li>
			<button class="hover:underline" @click="scrollIntoView('projects')">
				Projects
			</button>
		</li>
		<li>
			<button class="hover:underline" @click="scrollIntoView('contact')">
				Contact Me
			</button>
		</li>
		<li>
			<ThemeChanger :current-theme="currentTheme" @set-theme="setTheme" />
		</li>
	</ul>
</template>

<script setup lang="ts">
import { scrollIntoView } from '@/functions/common'
import ThemeChanger from './ThemeChanger.vue'

const props = defineProps({
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
