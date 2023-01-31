<template>
	<div class="page centralize-container">
		<FormLogin />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormLogin from "@/components/organisms/Forms/FormLogin.vue";

export default defineComponent({
	name: "Login",
	components: { FormLogin }
});
</script>

<style lang="scss" scoped>
.page {
	background-image: linear-gradient(#006CA5, #009ACC);
	height: 100vh;
}
</style>
