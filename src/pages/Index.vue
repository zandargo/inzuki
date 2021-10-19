<template>
	<div>
		<q-page class="no-padding no-selection">
			<div class="column no-padding">
				<div class="col-4 no-padding">
					<!-- //* ------------------------------------------------------------------------ *// -->
					<!-- //*                           CARD CONTAINER RESUMO                          *// -->
					<!-- //* ------------------------------------------------------------------------ *// -->
					<q-card class="title-card q-ma-sm q-px-none" bordered elevated>
						<q-card-section class="text-center text-bold text-h5 q-pa-xs">
							{{ log.currentMonth }} / {{ log.currentYear }}
						</q-card-section>

						<q-separator />
						<!--//* 			RESUMO DO PERÍODO 		-->
						<q-card-section class="text-center q-pa-xs text-center">
							<div class="row flex flex-center">
								<!--//> HORAS EXTRAS -->
								<div class="column">
									<div class="col text-caption q-px-sm">Extra</div>
									<q-separator />

									<div class="col text-body q-px-sm">00,0</div>
								</div>
								<!--//> HORAS NORMAIS -->
								<div class="column">
									<div class="col text-caption q-px-sm">Normal</div>
									<q-separator />
									<div class="col text-body q-px-sm">00,0</div>
								</div>
								<!--//> HORAS NÃO REALIZADAS -->
								<div class="column">
									<div class="col text-caption q-px-sm">Atraso</div>
									<q-separator />
									<div class="col text-body q-px-sm">00,0</div>
								</div>
								<q-separator vertical />
								<!--//> VALOR ATUAL -->
								<div class="column">
									<div class="col text-caption q-px-sm">Atual</div>
									<q-separator />
									<div class="col text-body q-px-sm">
										<span class="text-caption"> R$ </span>
										0000
									</div>
								</div>
								<!--//> VALOR META -->
								<!-- <div class="column">
									<div class="col text-caption q-px-sm">Meta</div>
									<q-separator />
									<div class="col text-body q-px-sm">R$ 0,00</div>
								</div> -->
								<!--//> VALOR MÁXIMO -->
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
				<!-- <div class="col-auto column q-pa-xs">
					<q-card
						class="
							no-margin
							row
							q-py-xs q-px-md
							justify-between
							bg-blue-grey-3
						"
						bordered
						elevated
					>
						<div class="col-1 text-center text-h6">Dia</div>
						<div class="col-3 text-center text-h6">Entrada</div>
						<div class="col-3 text-center text-h6">Saída</div>
						<div class="col-2 text-center text-h6">Extra</div>
					</q-card>
				</div> -->
				<div class="col-8 items-stretch column q-pa-xs">
					<!-- //* ------------------------------------------------------------------------ *// -->
					<!-- //*                      CARD LISTA DE DIAS DE TRABALHO                      *// -->
					<!-- //* ------------------------------------------------------------------------ *// -->
					<q-card class="no-margin fit-parent" bordered elevated>
						<!-- //* --------------------------- BARRA DE TÍTULOS --------------------------- *// -->
						<!-- <q-card-section class="q-py-sm text-center"
							>TESTE...
						</q-card-section>
						<q-separator /> -->
						<!-- //* -------------------------- CALENDÁRIO DE DIAS -------------------------- *// -->
						<!-- <q-card-section class="q-pa-none"> -->
						<!-- <div> -->
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
									class="row"
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
											<div class="row justify-center">
												<!-- <div class="col-3 text-h6">00:00</div> -->
												<!-- {{ item.strDate }} -->
												<!-- <div class="col-grow text-body text-center">
													12:30
												</div> -->
												<q-btn
													round
													padding="none"
													flat
													size="md"
													icon="add"
												/>
												<div class="q-px-md text-h5">00:00</div>
												<q-btn
													round
													padding="none"
													flat
													size="md"
													icon="remove"
												/>
												<!-- <div class="col-grow"></div>
												<q-separator vertical />
												<div class="col-grow"></div>
												<q-btn
													round
													padding="none"
													flat
													size="md"
													icon="add"
												/>
												<div class="q-px-none text-h5">00:00</div>
												<q-btn
													round
													padding="none"
													flat
													size="md"
													icon="remove"
												/> -->
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
						<!-- </div> -->
						<!-- </q-card-section> -->
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

		const maxSize = 2500;
		const worklog = [];

		let startDate = new Date(2021, 0, 1, 12, 0, 0, 0);
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

//! Adicionar entrada
//> 	Vue filters ?
//> 	Criar método adic/modificar valor
//> 	Criar um push no array de registros
//! Questões
//> 	Gerar lista completa no Vuex? -> Puxar a lista no Index?
//> 	Apagar entradas?
//> 	Criar método para apagar e passar o item do v-for para poder puxar a chave
//> 	findIndex
//>	classe slow/slower para reduzir animações
//! Importante: criar sistemática de ter array apenas com os dias preenchidos, para reduzir acessos ao firebase

//>	Documento no vídeo-exemplo (blog posts)
//>	blogCoverPhoto, blogCoverPhotoName, blogHTML, blogID, blogTitle, date, profileID
//>	2:52:00 -> pega o retorno do createUser e guarda a ID
//>
//>	docRef.add(newDocument)
//>	.addOnSuccessListener({})  e logo em seguida o código do q fazer qnd terminar o write
//>
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
