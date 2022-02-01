<template>
	<div>
		<div id="firebaseui-auth-container">
			<div v-if="getCurrentUser === 'LOADING'">
				<LoaderSVG />
			</div>
			<div v-else-if="getCurrentUser === null" />
			<div v-else>
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { nextTick, watch, onMounted } from 'vue'
import { startFirebaseAuthUI } from '@/functions/firebase_auth'
import 'firebaseui/dist/firebaseui.css'
import { useSessionStore } from '@/store/session'
import { storeToRefs } from 'pinia'
import LoaderSVG from '../SVG/Loader.vue'

const sessionStore = useSessionStore()
const { getCurrentUser } = storeToRefs(sessionStore)

const emit = defineEmits(['authorized'])

watch(
	() => getCurrentUser.value,
	newValue => {
		if (newValue === null) {
			nextTick(() => {
				startFirebaseAuthUI()
			})
		} else {
			emit('authorized')
		}
	}
)
onMounted(() => {
	if (getCurrentUser.value !== null && getCurrentUser.value !== 'LOADING') {
		emit('authorized')
	}
})
</script>
