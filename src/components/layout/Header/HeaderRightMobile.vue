<template>
	<button
			class="sm:hidden flex active:outline outline-gray-600 transition-transform duration-300"
			:class="{ '-translate-x-48': isMenuOpen }"
			@click="changeMenu(!isMenuOpen)"
		>
		<ViewListIcon class="w-8 h-8" />
	</button>
	<div
		class="sm:hidden fixed right-0 top-0 bottom-0 w-48 px-4 py-8 border-l border-gray-400 bg-light dark:bg-dark transition-transform duration-300"
		:class="{ 'translate-x-0': isMenuOpen, 'translate-x-48': !isMenuOpen }"
	>
		<ul class="flex flex-col gap-2">
			<li class="flex items-center gap-2">
				<ThemeChanger :current-theme="currentTheme" is-sidemenu @set-theme="setTheme" />
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ViewListIcon } from '@heroicons/vue/outline'
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

const isMenuOpen = ref(false)
const changeMenu = (isOpen: boolean) => {
	isMenuOpen.value = isOpen
}
</script>
