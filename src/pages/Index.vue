<template>
	<div>
		<q-page>
			<div>
				<q-card class="title-card q-ma-sm" bordered elevated>
					<q-card-section class="text-center q-pa-xs">
						<h6>{{ formattedDate }}</h6>
					</q-card-section>
					<q-separator inset />
					<q-card-section class="text-center q-pa-xs">
						<h4>{{ hours + ":" + minutes + ":" + seconds }}</h4>
					</q-card-section>
				</q-card>
			</div>
		</q-page>
	</div>
</template>

<script>
import { defineComponent } from "vue";
// import { date } from "quasar";
// import { InzukiDAO } from "../db/inzukiDAO";

// const timeStamp = Date.now();
// const formattedString = date.formatDate(timeStamp, "YYYY-MM-DDTHH:mm:ss.SSSZ");
// const formattedDate = date.formatDate(timeStamp, "dddd, DD / MM / YYYY", {
// 	days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
// 	daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
// 	months: [
// 		"Janeiro",
// 		"Fevereiro",
// 		"Março",
// 		"Abril",
// 		"Maio",
// 		"Junho",
// 		"Julho",
// 		"Agosto",
// 		"Setembro",
// 		"Outubro",
// 		"Novembro",
// 		"Dezembro",
// 	],
// 	monthsShort: [
// 		"Jan",
// 		"Fev",
// 		"Mar",
// 		"Abr",
// 		"Mai",
// 		"Jun",
// 		"Jul",
// 		"Ago",
// 		"Set",
// 		"Out",
// 		"Nov",
// 		"Dez",
// 	],
// });
// const formattedTime = date.formatDate(timeStamp, "HH : mm : ss");

export default defineComponent({
	name: "PageIndex",
	data() {
		return {
			year: 0,
			month: 0,
			day: 0,

			hours: 0,
			minutes: 0,
			seconds: 0,

			formattedDate: "",
		};
	},
	setup() {
		return {
			// timeStamp,
			// formattedDate,
			// formattedTime,
		};
	},
	methods: {
		setTime() {
			setInterval(() => {
				const date = new Date();
				this.year = date.getFullYear();
				this.month = this.checkSingleDigit(date.getMonth());
				this.day = this.checkSingleDigit(date.getDate());
				this.hours = this.checkSingleDigit(date.getHours());
				this.minutes = this.checkSingleDigit(date.getMinutes());
				this.seconds = this.checkSingleDigit(date.getSeconds());
				let opt = [
					{ day: "2-digit" },
					{ month: "2-digit" },
					{ year: "numeric" },
				];
				this.formattedDate = this.joinDate(date, opt, " / ");
			}, 1000);
		},
		checkSingleDigit(digit) {
			return ("0" + digit).slice(-2);
		},
		joinDate(time, opt, sep) {
			function format(m) {
				let f = new Intl.DateTimeFormat("en", m);
				return f.format(time);
			}
			return opt.map(format).join(sep);
		},
	},
	mounted() {
		this.setTime();
	},
});
</script>

<style lang="scss" scoped>
.my-card {
	width: 100%;
	// max-width: 250px;
}
</style>
