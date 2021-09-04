<template>
	<div>
		<q-page>
			<div class="column justify-start items-center q-pa-md">
				<div class="col full-width">
					<q-card class="title-card" bordered elevated>
						<q-card-section class="q-py-xs bg-grey-2">
							<div class="text-h5 q-ma-none">Informações Salariais</div>
						</q-card-section>
						<q-separator inset class="text-h3" />
						<q-card-section>
							<q-input
								v-model="baseIncome"
								label="Salário Bruto"
								prefix="R$ "
								mask="#,##"
								fill-mask="0"
								reverse-fill-mask
								input-class="text-right text-h5"
							/>
						</q-card-section>
					</q-card>
				</div>
			</div>
		</q-page>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	name: "findefs1",
	setup() {
		return {
			baseIncome: ref(""),
		};
	},
};
</script>

<style></style>
