<template>
	<div>
		<input
			v-bind="$attrs"
			v-model="inputValue"
			:type="inputType"
			v-if="!hiddenRevellingPassword ? (inputType = 'text') : 'password'"
			@blur="handleValue"
		/>
		<PasswordRevelling
			@toggle="togglePassword"
			v-if="hiddenRevellingPassword"
			:isPassword="isPasswordVisible"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PasswordRevelling from "../PasswordEye/PasswordRevelling.vue";

export default defineComponent({
	name: "BaseInput",
	components: { PasswordRevelling },
	emits: ["handleValue"],
	props: {
		currentValue: {
			type: String,
		},
		hiddenRevellingPassword: {
			type: Boolean,
		},
	},
	data() {
		return {
			inputType: "password",
			inputValue: "",
		}
	},
	computed: {
		isPasswordVisible(): boolean {
			return this.inputType === "text";
		},
	},
	methods: {
		handleValue(newValue: FocusEvent): void {
			this.$emit("handleValue", newValue);
		},

		togglePassword(): string {
			return this.inputType = this.isPasswordVisible ? "password" : "text"
		}
	}
});
</script>
