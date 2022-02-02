<template>
	<div
		class="flex gap-4 items-center pb-3 overflow-x-auto pageScrollbar"
		:class="{ 'mx-auto': !isExpenditure }"
	>
		<div
			v-for="itemType in typeList"
			:key="itemType"
			class="pb-2 border-b-2"
			:class="{ 'border-light-accent dark:border-dark-accent': itemType === editedItem!.Type }"
		>
			<TypeIcon
				:type="itemType"
				class="cursor-pointer"
				@click="selectType(itemType)"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useBalanceStore } from '@/store/balance'
import { BalanceType } from '@/static/enums'
import TypeIcon from '../TypeIcon.vue'

const store = useBalanceStore()
const { getTypeName } = store
const { isExpenditure, editedItem } = storeToRefs(store)
const typeList = computed(() => {
	return isExpenditure.value
		? [
				BalanceType.ELECTRICITY,
				BalanceType.WATER,
				BalanceType.GAS,
				BalanceType.INTERNET,
				BalanceType.PHONE,
				BalanceType.RENT,
				BalanceType.CREDIT,
				BalanceType.MARKET,
				BalanceType.EXPENDITURE
		  ]
		: [BalanceType.SALARY, BalanceType.INCOME]
})
const selectType = (itemType: BalanceType) => {
	editedItem!.value!.Type = itemType
	editedItem!.value!.CustomName = getTypeName(itemType)
}
</script>
