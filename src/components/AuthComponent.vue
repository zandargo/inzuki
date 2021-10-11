<template>
	<div>
		<template v-if="tab === 'register'">
			<div class="text-center q-mb-lg">Registrar com</div>
		</template>
		<template v-else>
			<div class="text-center q-mb-lg">Entrar com</div>
		</template>
		<div class="flex flex-center">
			<q-btn
				class="flex flex-center q-px-lg q-py-sm q-mb-md"
				size="md"
				label="Google"
				@click="google"
				color="primary"
			/>
		</div>
		<template v-if="tab === 'register'">
			<p class="text-center">Registrar com credenciais</p>
		</template>
		<template v-else>
			<p class="text-center">Entrar com credenciais</p>
		</template>

		<q-form @submit="submitForm">
			<q-input
				v-model="formData.email"
				outlined
				class="q-mb-md"
				type="email"
				label="E-mail"
			/>
			<q-input
				v-model="formData.password"
				outlined
				class="q-mb-md"
				type="password"
				label="Senha"
			/>
			<div class="row">
				<q-space />
				<q-btn type="submit" color="primary" :label="tabLabel" />
			</div>
		</q-form>
		<div class="text-center q-my-md">
			<q-btn
				v-if="tab !== 'register'"
				flat
				@click="forgotPassword"
				label="Esqueci minha senha"
				color="red"
				class="text-capitalize rounded-borders"
			/>
		</div>
		<q-dialog v-model="resetPwdDialog">
			<ForgotPassword />
		</q-dialog>
	</div>
</template>

<script>
// import firebase from "firebase/app";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useQuasar } from "quasar";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import ForgotPassword from "components/ForgotPassword.vue";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";

export default {
	name: "AuthComponent",
	props: ["tab", "tabLabel"],
	components: { ForgotPassword },
	data() {
		return {
			// formData: {
			// 	email: "",
			// 	password: "",
			// },
			// resetPwdDialog: false,
		};
	},
	setup(props) {
		//* ------------------------------ DATA VALUES ----------------------------- *//
		const formData = ref({
			email: "",
			password: "",
		});
		const $q = useQuasar();
		const router = useRouter();
		const route = useRoute();
		const resetPwdDialog = ref(false);
		const auth = getAuth();
		const provider = new GoogleAuthProvider();

		//* ------------------------------ SUBMIT FORM ----------------------------- *//
		const submitForm = () => {
			console.log("submitForm", props.tab);
			console.log("formData.value.email", formData.value.email);
			console.log("formData.value.password", formData.value.password);
			if (props.tab === "login") {
				signInExistingUser(formData.value.email, formData.value.password);
			} else {
				console.log("Teste");
				createUser(formData.value.email, formData.value.password);
			}
		};

		//* ---------------------------- CREATE NEW USER --------------------------- *//
		const createUser = (email, password) => {
			console.log(email, password);
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					// ...
					$q.notify({
						type: "positive",
						message: "Sign In Success.",
						position: "center",
						// color: "primary",
						textColor: "white",
						classes: ["loginok"],
					});
					router.push("/home");
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					// ..
				});
		};

		//* ------------------- SIGN IN WITH E-MAIL AND PASSWORD ------------------- *//
		const signInExistingUser = (email, password) => {
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
				});
		};
		//* -------------------------- SIGN IN WITH GOOGLE ------------------------- *//
		const google = () => {
			signInWithPopup(auth, provider)
				.then((result) => {
					// This gives you a Google Access Token. You can use it to access the Google API.
					const credential =
						GoogleAuthProvider.credentialFromResult(result);
					const token = credential.accessToken;
					// The signed-in user info.
					const user = result.user;
					// ...
				})
				.catch((error) => {
					// Handle Errors here.
					const errorCode = error.code;
					const errorMessage = error.message;
					// The email of the user's account used.
					const email = error.email;
					// The AuthCredential type that was used.
					const credential = GoogleAuthProvider.credentialFromError(error);
					// ...
				});
		};

		return {
			formData,
			resetPwdDialog,
			submitForm,
			createUser,
			signInExistingUser,
			google,
		};
	},

	methods: {
		// submitForm() {
		// 	if (this.tab === "login") {
		// 		this.signInExistingUser(
		// 			this.formData.email,
		// 			this.formData.password
		// 		);
		// 	} else {
		// 		this.createUser(this.formData.email, this.formData.password);
		// 	}
		// },
		// google() {
		// 	const provider = new firebase.auth.GoogleAuthProvider();
		// 	firebase
		// 		.auth()
		// 		.signInWithPopup(provider)
		// 		.then((result) => {
		// 			console.log("result", result);
		// 			this.$q.notify({ message: "Sign In Success." });
		// 			this.$router.push("/home");
		// 		})
		// 		.catch((error) => console.log("error", error));
		// },
		// signInExistingUser(email, password) {
		// 	console.log(email, password);
		// 	firebase
		// 		.auth()
		// 		.signInWithEmailAndPassword(email, password)
		// 		.then((userCredential) => {
		// 			this.$q.notify({ message: "Sign In Success." });
		// 			this.$router.push("/home");
		// 		})
		// 		.catch((error) => {
		// 			console.log(error);
		// 		});
		// },
		// createUser(email, password) {
		// 	console.log(email, password);
		// 	firebase
		// 		.auth()
		// 		.createUserWithEmailAndPassword(email, password)
		// 		.then((auth) => {
		// 			this.$q.notify({ message: "Sign In Success." });
		// 			this.$router.push("/home");
		// 		})
		// 		.catch((error) => {
		// 			console.log(error);
		// 		});
		// },
		forgotPassword() {
			this.resetPwdDialog = true;
		},
	},
};
</script>

<style lang="scss" scoped>
.loginok {
	font-size: 2.5rem !important;
}
</style>
