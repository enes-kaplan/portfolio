<template>
	<div class="bg-gray-100 dark:bg-dark">
		<div id="firebaseui-auth-container" />
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { firebaseAuthUI, uiConfig } from '@/functions/firebase_auth'
import 'firebaseui/dist/firebaseui.css'

onMounted(() => {
	firebaseAuthUI.start('#firebaseui-auth-container', uiConfig)
})
</script>
