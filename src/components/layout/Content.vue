<template>
	<router-view
		class="mt-header h-[calc(100vh-5rem)] scroll-pt-headers pb-20 overflow-y-auto pageScrollbar"
	/>
</template>

<script setup lang="ts"></script>

<style scoped>
/** This is for Firefox */
.pageScrollbar {
	scrollbar-color: #0369a1 white;
	scrollbar-width: thin;
	@apply transition-all duration-300;
}
.pageScrollbar::-webkit-scrollbar-track {
	@apply bg-light;
}
.pageScrollbar::-webkit-scrollbar {
	width: 8px;
	height: 4px;
}
.pageScrollbar::-webkit-scrollbar-thumb {
	@apply bg-light-accent;
}

.dark .pageScrollbar {
	scrollbar-color: #eab308 #374151;
	scrollbar-width: thin;
}
.dark .pageScrollbar::-webkit-scrollbar-track {
	@apply bg-dark;
}
.dark .pageScrollbar::-webkit-scrollbar-thumb {
	@apply bg-dark-accent;
}
</style>
