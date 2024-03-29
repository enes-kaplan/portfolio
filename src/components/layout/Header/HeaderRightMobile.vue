<template>
	<div class="sm:hidden flex items-center gap-4">
		<button
			class="flex active:outline outline-gray-600 transition-default"
			:class="{ '-translate-x-32': isMenuOpen }"
			aria-haspopup="true"
			aria-label="Open menu"
			@click="changeMenu(!isMenuOpen)"
		>
			<ViewListIcon class="w-8 h-8" />
		</button>
		<ThemeChanger :current-theme="currentTheme" @set-theme="setTheme" />
	</div>
	<div
		class="sm:hidden fixed right-0 top-0 bottom-0 w-48 px-4 py-8 border-l z-50 border-gray-400 bg-light dark:bg-dark transition-default"
		role="menu"
		:class="{ 'translate-x-0': isMenuOpen, 'translate-x-48': !isMenuOpen }"
		:aria-hidden="isMenuOpen === false"
		:aria-expanded="isMenuOpen"
	>
		<ul class="flex flex-col gap-2">
			<li>
				<button
					class="hover:underline"
					:tabindex="isMenuOpen ? 0 : -1"
					@click="scrollAndCloseMenu('landing')"
				>
					Info
				</button>
			</li>
			<li>
				<button
					class="hover:underline"
					:tabindex="isMenuOpen ? 0 : -1"
					@click="scrollAndCloseMenu('about')"
				>
					About Me
				</button>
			</li>
			<li>
				<button
					class="hover:underline"
					:tabindex="isMenuOpen ? 0 : -1"
					@click="scrollAndCloseMenu('projects')"
				>
					Projects
				</button>
			</li>
			<li>
				<button
					class="hover:underline"
					:tabindex="isMenuOpen ? 0 : -1"
					@click="scrollAndCloseMenu('contact')"
				>
					Contact Me
				</button>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ViewListIcon } from '@heroicons/vue/outline'
import { scrollIntoView } from '@/functions/common'
import ThemeChanger from './ThemeChanger.vue'

const props = defineProps({
	currentTheme: {
		type: String,
		required: true
	}
})

const emit = defineEmits(['setTheme'])
const router = useRouter()

const setTheme = (theme: string) => {
	emit('setTheme', theme)
}

const isMenuOpen = ref(false)
const changeMenu = (isOpen: boolean) => {
	isMenuOpen.value = isOpen
}
const scrollAndCloseMenu = (id: string) => {
	if (router.currentRoute.value.path === '/') {
		scrollIntoView(id)
		changeMenu(false)
	} else {
		router.push(`/#${id}`)
	}
}
</script>
