<template>
	<form @submit.prevent="$emit('formAction', user)">
		<BaseInput
			placeholder="Digite seu e-mail"
			v-model="user.email"
		/>
		<BaseInput
			placeholder="Digite sua senha"
			:hiddenRevellingPassword="true"
			v-model="user.password"
		/>
		<div class="btn-container">
			<MainButton
				class="common-btn"
				type="submit"
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
	components: { BaseInput, MainButton },
	emits: ['formAction'],
	data() {
		return {
			user: {
				email:'',
				password: '',
			}
		}
	},
});
</script>

<style lang="sass" scoped>
.btn-container
	margin-top: 10px
</style>
