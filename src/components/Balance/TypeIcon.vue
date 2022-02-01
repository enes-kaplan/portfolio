<template>
	<div
		class="flex justify-center items-center w-8 h-8 p-1 rounded-sm transition-default"
		:class="bgColor"
		:title="title"
	>
		<component :is="iconComponent" />
	</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { BalanceType } from '@/static/enums'
import { computed } from 'vue'
import ElectricitySVG from '@/components/SVG/Balance/Electricity.vue'
import WaterSVG from '@/components/SVG/Balance/Water.vue'
import GasSVG from '@/components/SVG/Balance/Gas.vue'
import InternetSVG from '@/components/SVG/Balance/Internet.vue'
import PhoneSVG from '@/components/SVG/Balance/Phone.vue'
import RentSVG from '@/components/SVG/Balance/Rent.vue'
import CreditSVG from '@/components/SVG/Balance/Credit.vue'
import MarketSVG from '@/components/SVG/Balance/Market.vue'
import ExpenditureSVG from '@/components/SVG/Balance/Expenditure.vue'
import SalarySVG from '@/components/SVG/Balance/Salary.vue'
import IncomeSVG from '@/components/SVG/Balance/Income.vue'
import OtherSVG from '@/components/SVG/Balance/Other.vue'

const props = defineProps({
	type: {
		type: Object as PropType<BalanceType>,
		required: true
	}
})

const title = computed(() => {
	switch (props.type) {
		case BalanceType.ELECTRICITY:
			return 'Electricity'
		case BalanceType.WATER:
			return 'Water'
		case BalanceType.GAS:
			return 'Gas'
		case BalanceType.INTERNET:
			return 'Internet'
		case BalanceType.PHONE:
			return 'Phone'
		case BalanceType.RENT:
			return 'Rent'
		case BalanceType.CREDIT:
			return 'Credit Card'
		case BalanceType.MARKET:
			return 'Market'
		case BalanceType.EXPENDITURE:
			return 'Custom Expenditure'
		case BalanceType.SALARY:
			return 'Salary'
		case BalanceType.INCOME:
			return 'Income'
		default:
			return 'Other'
	}
})
const bgColor = computed(() => {
	switch (props.type) {
		case BalanceType.ELECTRICITY:
			return 'bg-amber-500'
		case BalanceType.WATER:
			return 'bg-blue-600'
		case BalanceType.GAS:
			return 'bg-violet-500'
		case BalanceType.INTERNET:
			return 'bg-cyan-600'
		case BalanceType.PHONE:
			return 'bg-sky-600'
		case BalanceType.RENT:
			return 'bg-fuchsia-600'
		case BalanceType.CREDIT:
			return 'bg-rose-500'
		case BalanceType.MARKET:
			return 'bg-teal-500'
		case BalanceType.EXPENDITURE:
			return 'bg-red-600'
		case BalanceType.SALARY:
			return 'bg-green-600'
		case BalanceType.INCOME:
			return 'bg-emerald-700'
		default:
			return 'bg-gray-500'
	}
})
const iconComponent = computed(() => {
	switch (props.type) {
		case BalanceType.ELECTRICITY:
			return ElectricitySVG
		case BalanceType.WATER:
			return WaterSVG
		case BalanceType.GAS:
			return GasSVG
		case BalanceType.INTERNET:
			return InternetSVG
		case BalanceType.PHONE:
			return PhoneSVG
		case BalanceType.RENT:
			return RentSVG
		case BalanceType.CREDIT:
			return CreditSVG
		case BalanceType.MARKET:
			return MarketSVG
		case BalanceType.EXPENDITURE:
			return ExpenditureSVG
		case BalanceType.SALARY:
			return SalarySVG
		case BalanceType.INCOME:
			return IncomeSVG
		default:
			return OtherSVG
	}
})
</script>
