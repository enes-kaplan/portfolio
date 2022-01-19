<template>
	<div v-if="$store.getters.getCurrentUser === 'LOADING'">LOADER</div>
	<div
		v-else-if="$store.getters.getCurrentUser === null"
		id="firebaseui-auth-container"
	/>
	<div v-else>
		<slot />
	</div>
</template>

<script setup lang="ts">
import { watch, nextTick } from 'vue'
import { useStore } from '@/store/index'
import { auth } from '@/functions/firebase_setup'
import { startFirebaseAuthUI } from '@/functions/firebase_auth'
import 'firebaseui/dist/firebaseui.css'

const store = useStore()

watch(
	() => store.getters.getCurrentUser,
	newValue => {
		if (newValue === null) {
			nextTick(() => {
				startFirebaseAuthUI()
			})
		}
	}
)
</script>
