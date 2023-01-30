<template>
	<button class="base-style" @click="$emit('action')">
		{{ btn_title }}
	</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "MainButton",
	emits: ['action'],
	props: {
		btn_title: {
			type: String,
		}
	},
});
</script>

<style lang="sass" scoped>
.base-style
	height: 35px
	padding: 0 25px
	border: 1px solid gray
	border-radius: 8px
	cursor: pointer
</style>
