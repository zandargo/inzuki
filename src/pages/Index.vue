<template>
	<div>
		<!-- [ ] Divisão de página com rolagem apenas na parte inferior -->
		<!-- [ ] Resumo das HN, HE feitas, HE meta, valor relativo,  -->
		<q-page>
			<div class="column">
				<div class="col-md-4 col-4"></div>

				<div class="col-auto">
					<q-card class="title-card q-ma-sm" bordered elevated>
						<q-card-section class="text-center q-pa-xs">
							<h6>{{ time.formattedDate }}</h6>
						</q-card-section>
						<q-separator inset />
						<q-card-section class="text-center q-pa-xs">
							<h4>
								{{
									checkSingleDigit(time.hours) +
									":" +
									checkSingleDigit(time.minutes) +
									":" +
									checkSingleDigit(time.seconds)
								}}
							</h4>
						</q-card-section>
					</q-card>
				</div>
			</div>
		</q-page>
	</div>
</template>

<script>
//_ import { date } from "quasar";
//_ import { InzukiDAO } from "../db/inzukiDAO";
//_ const timeStamp = Date.now();
//_ const formattedString = date.formatDate(timeStamp, "YYYY-MM-DDTHH:mm:ss.SSSZ");
//_ const formattedDate = date.formatDate(timeStamp, "dddd, DD / MM / YYYY", {
//_ 	days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
//_ 	daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
//_ 	months: [
//_ 		"Janeiro",
//_ 		"Fevereiro",
//_ 		"Março",
//_ 		"Abril",
//_ 		"Maio",
//_ 		"Junho",
//_ 		"Julho",
//_ 		"Agosto",
//_ 		"Setembro",
//_ 		"Outubro",
//_ 		"Novembro",
//_ 		"Dezembro",
//_ 	],
//_ 	monthsShort: [
//_ 		"Jan",
//_ 		"Fev",
//_ 		"Mar",
//_ 		"Abr",
//_ 		"Mai",
//_ 		"Jun",
//_ 		"Jul",
//_ 		"Ago",
//_ 		"Set",
//_ 		"Out",
//_ 		"Nov",
//_ 		"Dez",
//_ 	],
//_ });
//_ const formattedTime = date.formatDate(timeStamp, "HH : mm : ss");
import { defineComponent, computed } from "vue";
import { useStore, mapState } from "vuex";

export default defineComponent({
	name: "PageIndex",
	data() {
		return {
			//_ 	year: 0,
			//_ 	month: 0,
			//_ 	day: 0,
			//_ 	hours: 0,
			//_ 	minutes: 0,
			//_ 	seconds: 0,
			//_ 	formattedDate: "",
		};
	},
	setup() {
		const $store = useStore();
		const time = computed({
			get: () => $store.state.zData.time,
			set: () => {
				$store.commit("zData/SetTime", {});
			},
		});

		return { time };
		//_ return {
		//_ timeStamp,
		//_ formattedDate,
		//_ formattedTime,
		//_ };
	},
	methods: {
		//_ setTime() {
		//_ 	setInterval(() => {
		//_ 		const date = new Date();
		//_ 		this.year = date.getFullYear();
		//_ 		this.month = this.checkSingleDigit(date.getMonth());
		//_ 		this.day = this.checkSingleDigit(date.getDate());
		//_ 		this.hours = this.checkSingleDigit(date.getHours());
		//_ 		this.minutes = this.checkSingleDigit(date.getMinutes());
		//_ 		this.seconds = this.checkSingleDigit(date.getSeconds());
		//_ 		let opt = [
		//_ 			{ day: "2-digit" },
		//_ 			{ month: "2-digit" },
		//_ 			{ year: "numeric" },
		//_ 		];
		//_ 		this.formattedDate = this.joinDate(date, opt, " / ");
		//_ 	}, 1000);
		//_ },
		checkSingleDigit(digit) {
			return ("0" + digit).slice(-2);
		},
		//_ joinDate(time, opt, sep) {
		//_ 	function format(m) {
		//_ 		let f = new Intl.DateTimeFormat("en", m);
		//_ 		return f.format(time);
		//_ 	}
		//_ 	return opt.map(format).join(sep);
		//_ },
	},
	mounted() {
		//_ this.setTime();
	},
});
</script>

<style lang="scss" scoped>
.my-card {
	width: 100%;
	//_ max-width: 250px;
}
</style>
