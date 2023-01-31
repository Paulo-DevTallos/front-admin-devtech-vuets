<template>
	<header class="header">
		<div class="greetings">
			<h3>{{
				$store.state.employeeStore.employee_name
					.split(" ")
					.slice(0, 2)
					.toString()
					.replace(",", " ")
			}}</h3>
			<p class="router-domain">Nome da rota</p>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: 'HeaderTemplate',
	mounted() {
		console.log(this.$store)
	}
});
</script>

<style scoped lang="scss">
.header {
	width: 100%;
	height: 63px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 40px;
	border-bottom: 1px solid rgb(214, 214, 214);

	.greetings {
		h3 {
			font-weight: 500;
			margin-bottom: 5px;
		}

		.router-domain {
			font-size: 0.85rem;
		}
	}
}
</style>
