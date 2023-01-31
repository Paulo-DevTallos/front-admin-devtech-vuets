<template>
	<div class="box-toast">
		<p>{{ status_message }}</p>
		<div id="baseline"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: 'ToastStatus',
	props: {
		status_message: {
			type: String,
			required: true
		}
	}
});
</script>

<style lang="scss" scoped>
.box-toast {
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-weight: 500;
	position: fixed;
	bottom: 35px;
	right: -100%;
	z-index: 2000;
	border-radius: 8px 0 0 8px;
	min-width: 200px;
	min-height: 60px;
	color: #fff;
	padding: 0 20px;

	p {
		font-weight: 500;
		color: #121212;
	}
}

.isModalActive {
	right: 0;
	transition: right 0.3s ease-in-out;
	color: #060a84d8;

	#baseline {
		position: absolute;
		bottom: 0;
		height: 7px;
		width: 100%;
		background: rgb(88, 219, 6);
		animation: slide 2s ease-in-out;
		transition: right 0.3s ease-in-out;
		@keyframes slide {
			from {
				transform: translateX(0);
			}
			to {
				transform: translateX(100%);
			}
		}
	}
}
.hasError {
	right: 0;
	transition: right 0.3s ease-in-out;

	#baseline {
		position: absolute;
		bottom: 0;
		height: 7px;
		width: 100%;
		background-color: red;
		animation: slide 2s ease-in-out;
		transition: right 0.3s ease-in-out;
		@keyframes slide {
			from {
				transform: translateX(0);
			}
			to {
				transform: translateX(100%);
			}
		}
	}
}
</style>
