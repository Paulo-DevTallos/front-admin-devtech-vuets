<template>
	<div class="sidebar">
		<div class="sidebar-container">
			<div class="logo-container">
				<router-link :to="{ path: `/app/dashboard` }">
					<img :src="logo" alt="logo E-tech principal">
				</router-link>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import logo from '@/assets/img/logo-dev-tech-nobg.png';

export default defineComponent({
	name: 'Sidebar',
	data() {
		return {
			logo: logo,
		}
	}
});
</script>

<style lang="scss" scoped>
.sidebar {
	width: 20%;
	padding: 10px;

	.sidebar-container {
		background-image: linear-gradient(to right, #f7f7f7, #ffffff);
		height: 100%;
		border-radius: 12px;
		padding: 20px;
		filter: drop-shadow(-2px 2px 5px rgba(0, 0, 0, 0.166));

		.logo-container {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 10px 0 28px;
			border-bottom: 2px solid #333;

			img {
				width: 170px;
			}
		}
	}
}
</style>
