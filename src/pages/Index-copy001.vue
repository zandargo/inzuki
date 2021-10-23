<template>
	<div>
		<q-page class="no-padding no-selection">
			<div class="column no-padding">
				<div class="col-4 no-padding">
					<q-card class="title-card q-ma-sm q-px-none" bordered elevated>
						<q-card-section class="text-center text-bold text-h5 q-pa-xs">
							{{ log.currentMonth }} / {{ log.currentYear }}
						</q-card-section>

						<q-separator />
						<!-- RESUMO DO PERÍODO -->
						<q-card-section class="text-center q-pa-xs text-center">
							<div class="row flex flex-center">
								<!-- HORAS EXTRAS -->
								<div class="column">
									<div class="col text-caption q-px-sm">Extra</div>
									<q-separator />
									<div class="col text-body q-px-sm">00,0</div>
								</div>
								<!-- HORAS NORMAIS -->
								<div class="column">
									<div class="col text-caption q-px-sm">Normal</div>
									<q-separator />
									<div class="col text-body q-px-sm">00,0</div>
								</div>
								<!-- HORAS NÃO REALIZADAS -->
								<div class="column">
									<div class="col text-caption q-px-sm">Atraso</div>
									<q-separator />
									<div class="col text-body q-px-sm">00,0</div>
								</div>
								<q-separator vertical />
								<!-- VALOR ATUAL -->
								<div class="column">
									<div class="col text-caption q-px-sm">Atual</div>
									<q-separator />
									<div class="col text-body q-px-sm">
										<span class="text-caption"> R$ </span>
										0000
									</div>
								</div>
								<!-- VALOR META -->
								<!-- <div class="column">
									<div class="col text-caption q-px-sm">Meta</div>
									<q-separator />
									<div class="col text-body q-px-sm">R$ 0,00</div>
								</div> -->
								<!-- VALOR MÁXIMO -->
								<div class="column">
									<div class="col text-caption q-px-md">Máx</div>
									<q-separator />
									<div class="col text-body q-px-md">
										<span class="text-caption"> R$ </span>
										0000
									</div>
								</div>
							</div>
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
							virtual-scroll-slice-ratio-before="4"
							virtual-scroll-slice-ratio-after="4"
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
									<q-item-section class="col-1 items-center text-h6">
										<!-- DIA DA SEMANA -->
										<q-item-label class="text-body1">
											{{ item.strWeekDay }}
										</q-item-label>
										<!-- DIA DO MÊS -->
										<q-item-label
											class="text-h5 text-bold"
											color="inzuki"
											>{{ item.strDay }}</q-item-label
										>
									</q-item-section>

									<q-separator vertical spaced />

									<q-item-section class="">
										<!-- LINHA ENTRADA -->
										<q-item-label class="text-body q-px-none">
											<div class="row justify-between">
												<div class="col-3 text-h6">Entrada</div>
												<div class="col-grow text-body text-center">
													<!-- {{ item.strDate }} -->
													00:00
												</div>
												<div class="col-shrink">
													<q-btn
														round
														padding="none"
														flat
														size="12px"
														icon="add"
													/>
													<q-btn
														round
														padding="none"
														flat
														size="12px"
														icon="remove"
													/>
												</div>
											</div>
										</q-item-label>
										<q-separator />

										<!-- LINHA SAÍDA -->
										<q-item-label class="">
											<div class="row justify-between">
												<div class="col-3 text-h6">Saída</div>
												<div class="col-grow text-body text-center">
													00:00
												</div>
												<div class="col-shrink">
													<q-btn
														round
														padding="none"
														flat
														size="12px"
														icon="add"
													/>
													<q-btn
														round
														padding="none"
														flat
														size="12px"
														icon="remove"
													/>
												</div>
											</div>
										</q-item-label>
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
				vlIndex.value = index + 3;
				setCurrentIndex(index + 3);
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
