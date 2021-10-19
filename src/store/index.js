import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import zData from "./data";

export default store(function (/* { ssrContext } */) {
	const Store = createStore({
		modules: {
			zData,
		},
		// enable strict mode (adds overhead!)
		// for dev mode and --debug builds only
		strict: process.env.DEBUGGING,
		plugins: [createPersistedState()],
	});

	return Store;
});
