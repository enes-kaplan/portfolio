<template>
	<div class="relative pl-10">
		<ContactSocial class="sect-anim" :class="sectionClass('social')" />
		<Landing class="sect-anim" :class="sectionClass('landing')" />
		<AboutMe class="sect-anim" :class="sectionClass('about')" />
		<Projects class="sect-anim" :class="sectionClass('projects')" />
		<Contact class="sect-anim" :class="sectionClass('contact')" />
	</div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { onMounted, onUnmounted, nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'
import ContactSocial from '@/components/Home/ContactSocial.vue'
import Landing from '@/components/Home/Landing.vue'
import AboutMe from '@/components/Home/AboutMe.vue'
import Projects from '@/components/Home/Projects.vue'
import Contact from '@/components/Home/Contact.vue'
import { scrollIntoView } from '@/functions/common'

let fadeInElements: Ref<Element[]> = ref([])
let fadedInElementIds: Ref<string[]> = ref([])

const sectionClass = (id: string) => {
	const elementInArray = fadedInElementIds.value.find(f => f === id)
	return elementInArray || router.currentRoute.value.hash !== ''
		? 'fade-in'
		: 'fade-out'
}
const setUpScroll = () => {
	const contentEl = document.getElementById('content')
	contentEl?.addEventListener('scroll', handleScroll)
	fadeInElements.value = Array.from(
		document.getElementsByClassName('sect-anim')
	)
	fadedInElementIds.value.push('landing')
}
const handleScroll = () => {
	for (let i = 0; i < fadeInElements.value.length; i++) {
		const el = fadeInElements.value[i]
		if (isElVisible(el)) {
			fadedInElementIds.value.push(el.id) // Remove it after it's animated
			fadeInElements.value.splice(i, 1)
		}
	}
}
const isElVisible = (el: Element): boolean => {
	var rect = el.getBoundingClientRect()
	var elTop = rect.top - 50 // pixels of buffer
	return elTop < window.innerHeight
}

const router = useRouter()
const scrollToElement = () => {
	if (router.currentRoute.value.hash !== '') {
		const elementId = router.currentRoute.value.hash.split('#')[1]
		scrollIntoView(elementId)
	}
}

onMounted(() => {
	nextTick(() => {
		setUpScroll()
		handleScroll()
		scrollToElement()
	})
})
onUnmounted(() => {
	const contentEl = document.getElementById('content')
	contentEl?.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.sect-anim {
	@apply transition-all transform duration-700 delay-500 ease-out;
}
.fade-out {
	@apply opacity-0 scale-75 translate-y-12;
}
.fade-in {
	@apply opacity-100 scale-100 translate-y-0;
}
</style>
