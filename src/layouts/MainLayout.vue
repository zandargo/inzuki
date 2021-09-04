<template>
	<q-layout view="hHh lpR fFf" class="">
		<q-header
			elevated
			class="
				bg-primary
				text-white
				q-electron-drag
				no-scroll
				shadow-3
				absolute-top
			"
			height-hint="98"
		>
			<q-toolbar>
				<q-btn
					flat
					dense
					round
					class="q-electron-drag--exception"
					size="22px"
					icon="menu"
					aria-label="Menu"
					@click="toggleLeftDrawer"
				/>

				<q-toolbar-title class="text-center text-bold q-mt-none">
					INZUKI
				</q-toolbar-title>

				<q-btn
					flat
					dense
					round
					size="22px"
					icon="home"
					aria-label="Home"
					@click="closeLeftDrawer"
					:to="{ name: 'home' }"
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

		<q-footer
			class="flex flex-center q-pa-none bg-blue-grey-5 absolute-bottom"
			style="
				 {
					heigth: '60px';
				}
			"
		>
			<q-toolbar> </q-toolbar>
		</q-footer>

		<q-page-container class="q-pa-lg">
			<keep-alive>
				<router-view />
			</keep-alive>
		</q-page-container>
	</q-layout>
</template>

<script>
import firedb from "src/boot/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

import EssentialLink from "components/EssentialLink.vue";

const linksList = [
	{
		title: "LOGIN/REGISTER",
		caption: "Logar no Inzuki database (a ser atualizado)",
		icon: "vpn_key",
		route: "auth",
	},
	{
		title: "HEADINGS",
		caption: "Template dos formatos de letra",
		icon: "face",
		route: "page1",
	},
	{
		title: "BUTTONS/SHAPES",
		caption: "Templates de botões e formas",
		icon: "settings",
		route: "page2",
	},
	{
		title: "NOTIFICAÇÕES",
		caption: "Defina lembretes e alarmes",
		icon: "notifications",
		route: "page3",
	},
	{
		title: "TESTE 1",
		caption: "Splash Screen",
		icon: "visibility",
		route: "SplashScreen",
	},
	{
		title: "Finança",
		caption: "Definições Financeiras",
		icon: "attach_money",
		route: "Finance1",
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
			closeLeftDrawer() {
				leftDrawerOpen.value = false;
			},
		};
	},
	mounted() {
		const q = query(collection(db, "worklog")); //, where("state", "==", "CA"));
		const unsubscribe = onSnapshot(q, (snapshot) => {
			snapshot.docChanges().forEach((change) => {
				if (change.type === "added") {
					console.log("New city: ", change.doc.data());
				}
				if (change.type === "modified") {
					console.log("Modified city: ", change.doc.data());
				}
				if (change.type === "removed") {
					console.log("Removed city: ", change.doc.data());
				}
			});
		});
	},
});
</script>
