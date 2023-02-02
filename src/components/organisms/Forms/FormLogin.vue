<template>
	<ToastStatus
		:status_message="message"
		:class="{ isModalActive: isActive, hasError: isError }"
	/>
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
import ToastStatus from "@/components/atoms/Modals/ToastStatus.vue";

import logo from '@/assets/img/logo-dev-tech-nobg.png';

export default defineComponent({
	name: "FormLogin",
	components: { LoginInputs, ToastStatus },
	data() {
		return {
			logo: logo,
			message: '',
			isActive: false,
			isError: false,
		}
	},
	methods: {
		login(user: object) {
			this.$store.dispatch('employeeStore/login', user).catch((err: any) => {
				const errorMessage = err.response.data.message;

				this.isError = true;
				this.message = errorMessage;
				setTimeout(() => {
					this.isError = false;
				}, 2000);
			})
		}
	},
});
</script>

<style lang="scss" scoped>
.box {
	background-color: #fff;
	width: 500px;
	padding: 30px 50px;
	border-radius: 16px;
	box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.166);

	p {
		text-align: center;
		padding: 15px 0;
		font-size: 13px;
	}

	&_logo {
		text-align: center;
	}

		img {
			width: 40%;
		}
}
</style>
