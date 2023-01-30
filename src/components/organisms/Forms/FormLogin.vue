<template>
	<div class="box">
		<div class="box_logo">
			<img :src="logo" alt="logo principal">
		</div>
		<p>Você está no sistema de gestão da plataforma / e-commerce DevTech</p>
		<LoginInputs />
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
	}
});
</script>

<style lang="sass" scoped>
.box
	background-color: #fff
	width: 40%
	padding: 30px
	border-radius: 16px
	box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.166)

	p
		text-align: center
		padding: 10px 80px

	&_logo
		text-align: center

		img
			width: 30%
</style>
