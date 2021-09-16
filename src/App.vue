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
		return {
			// year: 0,
			// month: 0,
			// day: 0,
			// hours: 0,
			// minutes: 0,
			// seconds: 0,
			// formattedDate: "",
		};
	},
	setup() {
		const $store = useStore();
		const time = computed({
			get: () => $store.state.zData.time,
			set: () => {
				// setInterval(() => {
				$store.commit("zData/SetTime", {});
				// }, 1000);
			},
		});

		return { time };
	},
	methods: {
		...mapMutations("zData", ["SET_TIME"]),
		// setTime() {
		// 	setInterval(() => {
		// 		// const $store = useStore();
		// 		// $store.commit("zData/SET_TIME", {});
		// 		// this.time.set;
		// 		this.SET_TIME();
		// 	}, 1000);
		// },
	},
	mounted() {
		// this.setTime();
	},
	created() {
		this.interval = setInterval(this.SET_TIME, 1000);
		// this.SET_TIME;
	},
	beforeUnmount() {
		//_ clearInterval(this.setTime());
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
