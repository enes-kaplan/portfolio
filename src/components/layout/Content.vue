<template>
	<div>
		<router-view class="mt-header h-[calc(100vh-5rem)] scroll-pt-headers overflow-y-auto pageScrollbar" />
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.pageScrollbar::-webkit-scrollbar-track {
	width: 6px;
	height: 4px;
	@apply bg-light;
}
.pageScrollbar::-webkit-scrollbar {
	width: 6px;
	height: 4px;
}
.pageScrollbar::-webkit-scrollbar-thumb {
	@apply bg-light-accent;
}

.dark .pageScrollbar::-webkit-scrollbar-track {
	@apply bg-dark;
}
.dark .pageScrollbar::-webkit-scrollbar {
	width: 6px;
	height: 4px;
}
.dark .pageScrollbar::-webkit-scrollbar-thumb {
	@apply bg-dark-accent;
}

</style>
