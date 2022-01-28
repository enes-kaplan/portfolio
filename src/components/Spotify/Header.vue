<template>
	<header
		class="flex justify-between items-center h-16 px-8 bg-spotify-darkest"
	>
		<HeaderLeft />
		<HeaderRight />
	</header>
</template>

<script setup lang="ts">
import HeaderLeft from './Header/Left.vue'
import HeaderRight from './Header/Right.vue'
</script>
