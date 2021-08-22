<template>
	<q-layout view="hHh lpR fFf">
		<q-header
			elevated
			class="bg-primary text-white q-electron-drag"
			height-hint="98"
		>
			<q-toolbar>
				<q-btn
					flat
					dense
					round
					class="q-electron-drag--exception"
					size="24px"
					icon="menu"
					aria-label="Menu"
					@click="toggleLeftDrawer"
				/>

				<q-toolbar-title class="text-center"> INZUKI </q-toolbar-title>

				<q-btn
					flat
					dense
					round
					size="md"
					icon="home"
					aria-label="Home"
					:to="{ name: 'index' }"
				/>
			</q-toolbar>
		</q-header>

		<q-drawer
			v-model="leftDrawerOpen"
			overlay
			elevated
			class="bg-blue-grey-1"
			behavior="mobile"
		>
			<q-list>
				<div class="q-mt-xl q-py-sm"></div>
				<EssentialLink
					v-for="link in essentialLinks"
					:key="link.title"
					v-bind="link"
				/>
			</q-list>
		</q-drawer>

		<q-footer class="flex flex-center q-pa-none">
			<q-toolbar> </q-toolbar>
		</q-footer>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
	{
		title: "Page 1",
		caption: "Go to next page",
		icon: "school",
		route: "page1",
	},
	{
		title: "Page 2",
		caption: "Go to other page",
		icon: "code",
		route: "page2",
	},
];

import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "MainLayout",

	components: {
		EssentialLink,
	},

	setup() {
		const leftDrawerOpen = ref(false);

		return {
			essentialLinks: linksList,
			leftDrawerOpen,
			toggleLeftDrawer() {
				leftDrawerOpen.value = !leftDrawerOpen.value;
			},
		};
	},
});
</script>
