export function SetBaseIncome(state, payload) {
	console.log("SetBaseIncome");
	state.db.baseIncome = payload.value;
}
