<template>
	<form>
		<BaseInput />
	</form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseInput from "@/components/atoms/Inputs/BaseInput.vue";

export default defineComponent({
	name: "LoginInputs",
	components: { BaseInput }
});
</script>
