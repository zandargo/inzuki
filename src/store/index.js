import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import createPersistedState from "vuex-persist-indexeddb";

import zData from "./data";
const zState = createPersistedState({
	paths: ["zData.db"],
});

export default store(function (/* { ssrContext } */) {
	const Store = createStore({
		modules: {
			zData,
		},
		plugins: [zState],

		// enable strict mode (adds overhead!)
		// for dev mode and --debug builds only
		strict: process.env.DEBUGGING,
	});

	return Store;
});
