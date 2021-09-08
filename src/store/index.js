import { store } from "quasar/wrappers";
import { createStore } from "vuex";
// import createPersistedState from "vuex-persist-indexeddb";
// import createPersistedState from "vuex-persistedstate";
// import { vuexfireMutations, firestoreAction } from "vuexfire";
// import { db } from "src/data/db";
// import { db } from "src/boot/firebase";

import zData from "./data";
// const zState = createPersistedState({
// 	paths: ["zData.db"],
// });

export default store(function (/* { ssrContext } */) {
	const Store = createStore({
		modules: {
			zData,
		},
		// mutations: {
		// 	...vuexfireMutations,
		// },
		// actions: {
		// 	bindLogs: firestoreAction(({ bindFirestoreRef }) => {
		// 		// return the promise returned by `bindFirestoreRef`
		// 		return bindFirestoreRef("nome", db.collection("worklogs"));
		// 	}),
		// },
		// plugins: [zState],

		// enable strict mode (adds overhead!)
		// for dev mode and --debug builds only
		strict: process.env.DEBUGGING,
	});

	return Store;
});
