<template>
	<li class="link">
		<router-link :to="{ path: `${router}` }">
			<Icon :icon="`carbon:${icon}`" />
			<p>{{ path_router_name }}</p>
		</router-link>
	</li>
</template>

<script lang="ts">
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";

export default	defineComponent({
	name: "SidebarLink",
	components: { Icon },
	props: {
		path_router_name: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: true
		},
		router: {
			type: String,
			requred: true
		}
	}
});
</script>

<style lang="scss" scoped>
.link {
	border-radius: 8px;
	margin: 3px 0;
	transition: .3s ease-in-out;

	a {
		padding: 15px 10px;
		display: flex;

		svg {
			margin-right: 10px;
		}
	}

	&:hover {
		background: #009acc;
		color: #fff;
	}
}

</style>
