<template>
	<AuthorizedContent>
		<!-- #region Desktop screen -->
		<div class="hidden sm:flex gap-12">DESKTOP</div>
		<!-- #endregion -->
		<!-- #region Mobile screen -->
		<div class="flex flex-col sm:hidden">MOBILE</div>
		<!-- #endregion -->
	</AuthorizedContent>
</template>

<script setup lang="ts">
import type { DocumentData } from 'firebase/firestore'
import { onMounted, nextTick } from 'vue'
import { getTodos } from '@/functions/firebase_todo'
import AuthorizedContent from '@/components/layout/AuthorizedContent.vue'
import store from '@/store/index'

let isLoading = true
onMounted(() => {
	setTimeout(() => {
		getTodos().then((todoList: DocumentData[]) => {
			if (todoList) {
				store.commit('updateTodoList', todoList)
			}
		})
	}, 5000)
})
</script>
