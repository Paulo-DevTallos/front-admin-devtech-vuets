<template>
	<nav class="navigation-menu">
		<ul>
			<SidebarLinks
				v-for="link in links"
				:key="link.id"
				:router="link.router"
				:path_router_name="link.description"
				:icon="link.icon"
			/>
		</ul>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarLinks from '@/components/atoms/SidebarLinks/index.vue';

import routerLinks from '../../../../constansts/router-links';

export default defineComponent({
	name: 'SidebarPlugins',
	components: { SidebarLinks },
	data() {
		return {
			links: routerLinks,
		}
	}
});
</script>

<style lang="scss" scoped>
.navigation-menu {
	padding: 10px 0;
}
</style>
