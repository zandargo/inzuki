<template>
	<q-page class="flex q-pa-md">
		<section id="firebaseui-auth-container"></section
	></q-page>
</template>

<script>
import firebase from "firebase";
import firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
	name: "AuthUI",
	components: {},
	data() {
		return {};
	},
	mounted() {
		let ui = firebaseui.auth.AuthUI.getInstance();
		if (!ui) {
			ui = new firebaseui.auth.AuthUI(firebase.auth());
		}
		const uiConfig = {
			signInSuccessUrl: "/profile",
			signInOptions: [
				firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				firebase.auth.EmailAuthProvider.PROVIDER_ID,
			],
		};
		ui.start("#firebaseui-auth-container", uiConfig);
	},
};
</script>
