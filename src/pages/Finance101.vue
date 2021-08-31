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
								v-model="ph"
								label="Base"
								placeholder="Salário base"
								hint="Dica"
							/>
							<q-input v-model="text" label="Label" />
						</q-card-section>
					</q-card>
					<q-input v-model="text" label="Label" />
				</div>
				<!-- <div class="col">
					<q-btn rounded color="primary" label="Clique aqui" />
				</div>
				<div class="col">
					<q-btn-group rounded dense>
						<q-btn rounded dense color="primary" icon="add" />
						<q-btn rounded dense color="primary" icon="remove" />
					</q-btn-group>
				</div> -->
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
			text: ref(""),
			ph: ref(""),
			dense: ref(false),
		};
	},
};
</script>

<style></style>
