<template>
	<div class="card">
		<div class="sec-infos">
			<Icon icon="mdi:account-multiple" />
			<div>
				<p>{{ card_message }}</p>
				<span>{{ count_value }}</span>
			</div>
		</div>
		<div class="redirect-card">
			ir para relatório
		</div>
	</div>
</template>

<script lang="ts">
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";

export default defineComponent({
	name: "MenagerCard",
	components: { Icon },
	props: {
		card_message: {
			type: String,
			required: true
		},
		count_value: {
			type: String,
			required: true,
		}
	}
});
</script>

<style lang="scss" scoped>
.card {
	width: 25%;
	border: 1px solid;
	margin: 0 20px;
	padding: 20px;
	background: #fff;
	border: none;
	border-radius: 12px;
	box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.166);

	.sec-infos {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid rgb(214, 214, 214);
		padding-bottom: 15px;
		color: #9c9ca0;

		svg {
			font-size: 40px;
			color: #006CA5;
		}

		span {
			color: #121212;
			font-weight: 500;
			font-size: 1.5rem;
		}

		>div {
			text-align: end;
		}
	}

	.redirect-card {
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
		height: 35px;
	}
}
</style>
