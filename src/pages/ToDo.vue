<template>
	<AuthorizedContent>
		<h1 class="text-3xl sm:text-5xl text-center my-4">
			Keep track of your to-dos and get it done 👍
		</h1>
		<!-- #region Desktop screen -->
		<div class="hidden sm:flex gap-12 mt-12 px-20 h-full">
			<Column :status="TodoStatus.TODO" class="w-1/3" is-draggable />
			<Column
				:status="TodoStatus.IN_PROGRESS"
				class="w-1/3"
				is-draggable
			/>
			<Column :status="TodoStatus.DONE" class="w-1/3" is-draggable />
		</div>
		<!-- #endregion -->
		<!-- #region Mobile screen -->
		<div class="flex flex-col sm:hidden mt-12 px-8">
			<select v-model="selectedStatus" class="input-text mb-4">
				<option :value="TodoStatus.TODO" class="text-dark">
					{{ store.getters.getStatusText(TodoStatus.TODO) }}
				</option>
				<option :value="TodoStatus.IN_PROGRESS" class="text-dark">
					{{ store.getters.getStatusText(TodoStatus.IN_PROGRESS) }}
				</option>
				<option :value="TodoStatus.DONE" class="text-dark">
					{{ store.getters.getStatusText(TodoStatus.DONE) }}
				</option>
			</select>
			<Column :status="selectedStatus" is-draggable="false" />
		</div>
		<!-- #endregion -->
	</AuthorizedContent>
</template>

<script setup lang="ts">
import store from '@/store/index'
import { ref, onMounted } from 'vue'
import type { DocumentData } from 'firebase/firestore'
import { getTodos } from '@/functions/firebase_todo'
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
	}, 2000)
})

const selectedStatus = ref(TodoStatus.TODO)
</script>
