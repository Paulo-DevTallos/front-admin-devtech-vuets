<template>
	<div class="box">
		<div class="box_logo">
			<img :src="logo" alt="logo principal">
		</div>
		<p>Você está no sistema de gestão da plataforma / e-commerce DevTech</p>
		<LoginInputs @formAction="login"/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginInputs from '@/components/molecules/LoginInputs/index.vue'

import logo from '@/assets/img/logo-dev-tech-nobg.png';

export default defineComponent({
	name: "FormLogin",
	components: { LoginInputs },
	data() {
		return {
			logo: logo,
		}
	},
	methods: {
		login(user: object) {
			console.log(user)
		}
	}
});
</script>

<style lang="sass" scoped>
.box
	background-color: #fff
	width: 500px
	padding: 30px 50px
	border-radius: 16px
	box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.166)

	p
		text-align: center
		padding: 15px 0
		font-size: 13px

	&_logo
		text-align: center

		img
			width: 40%
</style>
