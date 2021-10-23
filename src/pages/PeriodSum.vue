<template>
	<div>
		<q-page class="no-padding no-selection">
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

		return {
			time,
			log,
		};
	},
	methods: {},
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
