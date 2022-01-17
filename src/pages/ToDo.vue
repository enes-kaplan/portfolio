<template>
	<AuthorizedContent>
		<!-- #region Desktop screen -->
		<div class="hidden sm:flex gap-12 mt-12 px-20 h-full">
			<Column :status="TodoStatus.TODO" class="w-1/3" />
			<Column :status="TodoStatus.IN_PROGRESS" class="w-1/3" />
			<Column :status="TodoStatus.DONE" class="w-1/3" />
		</div>
		<!-- #endregion -->
		<!-- #region Mobile screen -->
		<div class="flex flex-col sm:hidden mt-12">
			Status Select Dropdown
			<Column :status="TodoStatus.TODO" />
		</div>
		<!-- #endregion -->
	</AuthorizedContent>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import type { DocumentData } from 'firebase/firestore'
import { getTodos } from '@/functions/firebase_todo'
import store from '@/store/index'
import { TodoStatus } from '@/static/enums'
import AuthorizedContent from '@/components/layout/AuthorizedContent.vue'
import Column from '@/components/ToDo/Column.vue'

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
