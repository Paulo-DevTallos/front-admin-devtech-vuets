import { createStore } from 'vuex';
import employeeStore from './employee/employeeStore';
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
	modules: {
		employeeStore,
	},
	plugins: [createPersistedState()],
});
