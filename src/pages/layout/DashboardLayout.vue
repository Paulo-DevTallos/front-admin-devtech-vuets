<template>
	<div class="wrapper">
		<Sidebar />
		<div class="main-painel">
			<p>Header</p>
			<main>
				<Content />
			</main>
			<p>footer</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Content from "./Content.vue";
import Sidebar from '@/components/organisms/Sidebar/index.vue';

export default defineComponent({
  components: { Content, Sidebar },
	name: 'DashboardLayout',
});
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.wrapper {
	display: flex;
	max-width: 100%;
	margin: 0 auto;
	margin-bottom: 20px;
	height: 100%;

	.main-painel {
		width: 85%;
		min-height: 100vh;
		background: red;

		main {
			height: 84%;
		}
	}
}
</style>
