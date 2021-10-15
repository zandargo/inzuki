<template>
	<router-view />
</template>

<script>
import { defineComponent, computed } from "vue";
import {
	useStore,
	mapMutations,
	mapState,
	createNamespacedHelpers,
} from "vuex";

export default defineComponent({
	name: "App",
	data() {
		return {};
	},
	setup() {
		const $store = useStore();
		const time = computed({
			get: () => $store.state.zData.time,
			set: () => {
				$store.commit("zData/SET_TIME", {}); //! ALTERADO
			},
		});

		return { time };
	},
	methods: {
		...mapMutations("zData", ["SET_TIME"]),
	},
	mounted() {},
	created() {
		this.interval = setInterval(this.SET_TIME, 1000);
	},
	beforeUnmount() {
		clearInterval(this.interval);
	},
});
</script>

<style lang="scss">
@import "./css/app.scss";
@import "./css/quasar.variables.scss";
@font-face {
	font-family: "RobotoCondensed";
	//_ src: url('./assets/fonts/RobotoCondensed-Regular.ttf') format('truetype');
	src: url("../public/fonts/RobotoCondensed-Regular.ttf") format("truetype");
}
* {
	font-family: "RobotoCondensed";
	letter-spacing: 0.08em;
}
</style>
