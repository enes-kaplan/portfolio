<template>
	<ul class="hidden sm:flex flex-row items-center gap-4">
		<li>
			<button class="hover:underline" @click="scrollToSection('landing')">
				Info
			</button>
		</li>
		<li>
			<button class="hover:underline" @click="scrollToSection('about')">
				About Me
			</button>
		</li>
		<li>
			<button
				class="hover:underline"
				@click="scrollToSection('projects')"
			>
				Projects
			</button>
		</li>
		<li>
			<button class="hover:underline" @click="scrollToSection('contact')">
				Contact Me
			</button>
		</li>
		<li>
			<ThemeChanger :current-theme="currentTheme" @set-theme="setTheme" />
		</li>
	</ul>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
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

const router = useRouter()
const scrollToSection = (id: string) => {
	if (router.currentRoute.value.path === '/') {
		scrollIntoView(id)
	} else {
		router.push(`/#${id}`)
	}
}
</script>
