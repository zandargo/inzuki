<template>
	<div>
		<!-- [ ] Divisão de página com rolagem apenas na parte inferior -->
		<!-- [ ] Resumo das HN, HE feitas, HE meta, valor relativo,  -->
		<q-page class="no-padding">
			<div class="column no-padding">
				<div class="col-4 no-padding">
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

				<q-separator size="2px" />

				<div class="col-8 col-auto">
					<q-virtual-scroll
						style="max-height: 800px"
						:items="worklog"
						separator
					>
						<template v-slot="{ item, index }">
							<q-item :key="index" dense clickable v-ripple>
								<q-item-section>
									<q-item-label class="text-h6 no-margin">
										{{ item.strWeekDay }}
									</q-item-label>
									<q-item-label class="text-h5 no-margin">{{
										item.strDay
									}}</q-item-label>
								</q-item-section>
							</q-item>
						</template>
					</q-virtual-scroll>
				</div>
			</div>
		</q-page>
	</div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore, mapState } from "vuex";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { ptBR, en } from "date-fns/locale";

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

		const maxSize = 10000;
		const worklog = [];

		let startDate = new Date(2015, 1, 1);
		let currentDate = new Date();
		for (let i = 0; i < maxSize; i++) {
			currentDate = startDate.valueOf() + i * 1000 * 3600 * 24;
			worklog.push({
				valDate: currentDate,
				strDate: format(currentDate, "dd-MM-yy"),
				strDay: format(currentDate, "dd"),
				strWeekDay: format(currentDate, "eeeeee", { locale: ptBR }),
				label: "Option " + (i + 1),
			});
		}

		return { time, worklog };
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
