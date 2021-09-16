export function SetBaseIncome(state, payload) {
	console.log("SetBaseIncome");
	state.db.baseIncome = payload.value;
}

// function checkSingleDigit(digit) {
// 	return ("0" + digit).slice(-2);
// }
function joinDate(time, opt, sep) {
	function format(m) {
		let f = new Intl.DateTimeFormat("en", m);
		return f.format(time);
	}
	return opt.map(format).join(sep);
}

export function SET_TIME(state) {
	let date = new Date();
	// state.time.stamp = Date.now();	//!Slow down devtools
	state.time.year = date.getFullYear();
	state.time.month = date.getMonth() + 1;
	state.time.day = date.getDate();
	state.time.hours = date.getHours();
	state.time.minutes = date.getMinutes();
	state.time.seconds = date.getSeconds();
	let opt = [{ day: "2-digit" }, { month: "2-digit" }, { year: "numeric" }];
	state.time.formattedDate = joinDate(date, opt, " / ");

	let idxToday = Math.round(date.valueOf() / 86400000);
	state.time.idxToday = idxToday - state.app.idxDate0;
}

// export function SET_SECTION(state, valSection) {
// 	state.app.section = valSection;
// }
