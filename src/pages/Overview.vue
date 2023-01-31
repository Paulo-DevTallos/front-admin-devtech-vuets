<template>
	<div class="cards-data">
		<MenagerCard
			:card_message="'Usuários ativos'"
			:count_value="'300'"
		/>
		<MenagerCard
			:card_message="'uma mensagem'"
			:count_value="'300'"
		/>
		<MenagerCard
			:card_message="'uma mensagem'"
			:count_value="'300'"
		/>
		<MenagerCard
			:card_message="'uma mensagem'"
			:count_value="'300'"
		/>
	</div>
</template>

<script lang="ts">
import MenagerCard from "@/components/atoms/Cards/MenagerCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
	name: "Overview",
	components: { MenagerCard }
});
</script>

<style lang="scss" scoped>
.cards-data {
	display: flex;
	justify-content: space-around;
	width: 100%;
	padding: 0 20px;
}
</style>
