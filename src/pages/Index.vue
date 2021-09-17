<template>
	<div>
		<!-- [x] Divisão de página com rolagem apenas na parte inferior -->
		<!-- [ ] Resumo das HN, HE feitas, HE meta, valor relativo,  -->
		<q-page class="no-padding no-selection">
			<div class="column no-padding">
				<div class="col-4 no-padding">
					<q-card class="title-card q-ma-sm" bordered elevated>
						<!-- <q-card-section class="text-center q-pa-xs">
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
						<q-separator inset /> -->
						<q-card-section class="text-center q-pa-xs">
							<h5>{{ log.currentMonth }} / {{ log.currentYear }}</h5>
							<!-- <q-input
								style="min-width: 2em"
								type="number"
								v-model.number="vlIndex"
								:min="0"
								:max="9999"
								label="Scroll to index"
								input-class="text-right"
								outlined
							/>
							<q-btn
								class="q-ml-sm"
								label="Go"
								no-caps
								color="primary"
								@click="executeScroll"
							/> -->
						</q-card-section>
					</q-card>
				</div>

				<q-separator size="2px" />

				<div class="col-8 items-stretch column q-pa-xs">
					<q-card class="no-margin fit-parent" bordered elevated>
						<q-virtual-scroll
							ref="vlRef"
							component="q-list"
							style="max-height: 100%"
							:items="worklog"
							@virtual-scroll="onVirtualScroll"
							@gohome="goToday"
							separator
							color="inzuki"
							class="text-inzuki"
						>
							<template v-slot="{ item, index }">
								<q-item
									dense
									:key="index"
									:class="{
										'is-workday': item.valWeekDay != 1,
										'is-freeday': item.valWeekDay == 1,
										'is-hollyday': false,
										'is-today': index == time.todayIndex,
									}"
								>
									<q-item-section class="col-1 items-center">
										<q-item-label class="text-h6">
											{{ item.strWeekDay }}
										</q-item-label>
										<q-item-label
											class="text-h5 text-bold"
											color="inzuki"
											>{{ item.strDay }}</q-item-label
										>
									</q-item-section>

									<q-separator vertical spaced />

									<q-item-section class="">
										<q-item-label class="">
											Entrada - {{ item.id }} - {{ item.strDate }}
										</q-item-label>
										<q-separator />
										<q-item-label class=""> Saída </q-item-label>
									</q-item-section>

									<q-separator vertical spaced />

									<q-item-section class="col-3">
										<q-item-label class="text-caption">
											H.E. 0,0</q-item-label
										>
										<q-separator />
										<q-item-label class="text-caption">
											R$ 0,00
										</q-item-label>
									</q-item-section>
								</q-item>
							</template>
						</q-virtual-scroll>
					</q-card>
				</div>
			</div>
		</q-page>
	</div>
</template>

<script>
import { defineComponent, computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { ptBR, en } from "date-fns/locale";

export default defineComponent({
	name: "PageIndex",
	data() {
		return {
			midIndex: 1,
			strPeriod: "str001",
		};
	},
	setup() {
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

		const maxSize = 10000;
		const worklog = [];

		let startDate = new Date(2015, 0, 1, 12, 0, 0, 0);
		let currentDate = new Date();
		for (let i = 0; i < maxSize; i++) {
			currentDate = startDate.valueOf() + i * 86400000;
			worklog.push({
				// id: Math.round(currentDate.valueOf() / 86400000),
				valDate: currentDate,
				strDate: format(currentDate, "dd-MM-yy"),
				strDay: format(currentDate, "dd"),
				strWeekDay: format(currentDate, "eeeeee", { locale: ptBR }),
				valWeekDay: format(currentDate, "e"),
				strMMyy: format(currentDate, "MMMM / yyyy", { locale: ptBR }),
			});
		}

		const vlRef = ref(null);
		const vlIndex = ref(2440);
		const sPeriod = ref("");

		const setCurrentIndex = (value) =>
			$store.commit("zData/SET_LOG_INDEX", { value });

		const goToday = () => {
			vlRef.value.scrollTo(time.value.todayIndex, "center-force");
		};

		onMounted(() => {
			vlRef.value.scrollTo(time.value.todayIndex, "center-force");
		});

		return {
			time,
			log,
			worklog,
			vlRef,
			vlIndex,
			sPeriod,
			setCurrentIndex,

			onVirtualScroll({ index }) {
				vlIndex.value = index;
				setCurrentIndex(index);
			},

			goToday,
			// goToday() {
			// 	vlRef.value.scrollTo(time.value.todayIndex, "center-force");
			// },
		};
	},
	methods: {
		checkSingleDigit(digit) {
			return ("0" + digit).slice(-2);
		},
	},
});

//> :style="[
//> 	item.valWeekDay != 1
//> 		? { 'background-color': '#FFFDE7' }
//> 		: { 'background-color': '#F1F8E9' },
//> 	true ? {} : {},
//> ]"
</script>

<style lang="scss" scoped>
@import "src/css/app.scss";
@import "src/css/quasar.variables.scss";

.my-card {
	width: 100%;
}

.fit-parent {
	height: calc(100vh - 250px);
}

.is-workday {
	background-color: $bgWorkDay;
}
.is-freeday {
	background-color: $bgFreeDay;
}

.is-hollyday {
	background-color: $bgHollyday !important;
}

.is-today {
	background-color: $bgToday !important;
	color: white !important;
}
</style>
