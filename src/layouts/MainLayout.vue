<template>
	<q-layout view="hHh lpR fFf" class="no-scroll hide-scrollbar">
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
			<q-toolbar class="">
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

				<q-toolbar-title class="text-center q-mt-none">
					<div v-if="section === 'INZUKI'" class="text-h3 txt-spaced-1">
						INZUKI
					</div>
					<div v-if="section !== 'INZUKI'" class="text-h4">
						{{ section }}
					</div>
				</q-toolbar-title>

				<q-btn
					flat
					dense
					round
					size="22px"
					icon="home"
					class="disable"
					v-if="section === 'INZUKI' && time.todayIndex == log.idxCurrent"
				/>
				<q-btn
					v-model="homeBtnOn"
					flat
					dense
					round
					size="22px"
					icon="home"
					aria-label="Home"
					@click="goHome"
					:to="{ name: 'home' }"
					v-if="section !== 'INZUKI' || time.todayIndex != log.idxCurrent"
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
					@click="setSection(link.title)"
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

		<q-page-container class="window-height">
			<keep-alive>
				<router-view />
			</keep-alive>
		</q-page-container>
	</q-layout>
</template>

<script>
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

import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
	name: "MainLayout",

	components: {
		EssentialLink,
	},

	data() {
		return {
			isHomeOn: false,
		};
	},
	emits: ["gohome"],

	setup(props, { emit }) {
		const leftDrawerOpen = ref(false);
		const section = ref("INZUKI");
		const homeBtnOn = ref(false);

		const $store = useStore();
		const time = computed({
			get: () => $store.state.zData.time,
			set: () => {
				$store.commit("zData/SetTime", {}); //! Ativo ???
			},
		});
		const log = computed({
			get: () => $store.state.zData.log,
			set: () => {
				$store.commit("zData/SET_LOG_INDEX", { value });
			},
		});

		const goHome = () => {
			leftDrawerOpen.value = false;
			section.value = "INZUKI";
			// homeBtnOn.value = true;
			emit("gohome");
		};

		return {
			essentialLinks: linksList,
			leftDrawerOpen,
			section,
			homeBtnOn,
			time,
			log,

			toggleLeftDrawer() {
				leftDrawerOpen.value = !leftDrawerOpen.value;
			},

			goHome,
			// goHome() {
			// 	leftDrawerOpen.value = false;
			// 	section.value = "INZUKI";
			// 	emit("gohome");
			// },

			setSection(val) {
				section.value = val;
			},
		};
	},
});
</script>

<style lang="scss" scoped>
.enable {
	opacity: 1;
}
.disable {
	opacity: 0.2;
}
</style>
