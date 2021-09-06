export function SetBaseIncome(state, payload) {
	state.db.user.baseIncome = payload.value;
}
