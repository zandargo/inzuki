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

				<div class="col-8 items-stretch column q-pa-xs">
					<q-card class="no-margin fit-parent" bordered elevated>
						<q-virtual-scroll
							style="max-height: 100%"
							:items="worklog"
							separator
							color="inzuki"
							class="text-inzuki"
						>
							<template v-slot="{ item, index }">
								<q-item
									:key="index"
									dense
									:style="[
										item.valWeekDay != 1
											? { 'background-color': '#FFFDE7' }
											: { 'background-color': '#F1F8E9' },
										true ? {} : {},
									]"
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
											Entrada - {{ item.id }}
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
import { useStore, mapState } from "vuex";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { ptBR, en } from "date-fns/locale";

export default defineComponent({
	name: "PageIndex",
	data() {
		return {};
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

		let startDate = new Date(2015, 1, 1, 12, 0, 0, 0);
		let currentDate = new Date();
		for (let i = 0; i < maxSize; i++) {
			currentDate = startDate.valueOf() + i * 1000 * 3600 * 24;
			worklog.push({
				id: Math.round(currentDate.valueOf() / (1000 * 3600 * 24)),
				valDate: currentDate,
				strDate: format(currentDate, "dd-MM-yy"),
				strDay: format(currentDate, "dd"),
				strWeekDay: format(currentDate, "eeeeee", { locale: ptBR }),
				valWeekDay: format(currentDate, "e"),
				label: "Option " + (i + 1),
			});
		}

		return { time, worklog };
	},
	methods: {
		checkSingleDigit(digit) {
			return ("0" + digit).slice(-2);
		},
	},
	mounted() {},
});
</script>

<style lang="scss" scoped>
.my-card {
	width: 100%;
}

.fit-parent {
	height: calc(100vh - 200px);
}
</style>
