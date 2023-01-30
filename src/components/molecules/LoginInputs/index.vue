<template>
	<form>
		<BaseInput
			placeholder="Digite seu e-mail"
		/>
		<BaseInput
			placeholder="Digite sua senha"
			:hiddenRevellingPassword="true"
		/>
		<div class="btn-container">
			<MainButton
				class="common-btn"
				:btn_title="'Realizar Login'"
			/>
		</div>
	</form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseInput from "@/components/atoms/Inputs/BaseInput.vue";
import MainButton from "@/components/atoms/Button/MainButton.vue";

export default defineComponent({
	name: "LoginInputs",
	components: { BaseInput, MainButton }
});
</script>

<style lang="sass" scoped>
.btn-container
	margin-top: 10px
</style>
