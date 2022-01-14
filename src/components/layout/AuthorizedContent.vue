<template>
	<div v-if="$store.getters.getCurrentUser === 'LOADING'">
		LOADER
	</div>
	<div v-else-if="$store.getters.getCurrentUser === null" id="firebaseui-auth-container" />
	<div v-else>
		<slot />
	</div>
</template>

<script setup lang="ts">
import { watch, onMounted, nextTick } from 'vue'
import store from '../../store'
import { auth } from '@/functions/firebase_setup'
import { startFirebaseAuthUI } from '@/functions/firebase_auth'
import 'firebaseui/dist/firebaseui.css'

watch(() => store.getters.getCurrentUser, (newValue) => {
	if (newValue === null) {
		nextTick(() => {
			startFirebaseAuthUI()
		})
	}
})
</script>
