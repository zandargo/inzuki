<template>
	<q-page class="flex q-pa-md">
		<q-card class="full-width">
			<q-tabs
				v-model="tab"
				dense
				class="text-grey"
				active-color="primary"
				indicator-color="primary"
				align="justify"
				narrow-indicator
			>
				<q-tab name="login" label="Entrar" />
				<q-tab name="register" label="Cadastrar" />
			</q-tabs>

			<q-tab-panels v-model="tab" animated>
				<q-tab-panel name="login">
					<AuthComponent :tab="tab" tabLabel="Entrar" />
				</q-tab-panel>

				<q-tab-panel name="register">
					<AuthComponent :tab="tab" tabLabel="Cadastrar" />
				</q-tab-panel>
			</q-tab-panels>
		</q-card>
	</q-page>
</template>

<script>
import AuthComponent from "components/AuthComponent.vue";
export default {
	components: { AuthComponent },
	data() {
		return {
			tab: "login", // NOTE Mudar p/ composition API?
		};
	},
};
</script>
