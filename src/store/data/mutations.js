import { format } from "date-fns";
import { ptBR, en } from "date-fns/locale";

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

	let todayIndex = Math.round(date.valueOf() / 86400000);
	state.time.idxToday = todayIndex;
	state.time.todayIndex = todayIndex - state.app.idxDate0;
}

export function SET_LOG_INDEX(state, valIndex) {
	state.log.currentIndex = valIndex.value;
	let stampIndex = valIndex.value + state.app.idxDate0;
	state.log.idxCurrent = stampIndex;

	let fullStampIndex = stampIndex * 86400000;
	state.log.currentMonth = format(fullStampIndex, "MMMM", {
		locale: ptBR,
	}).toUpperCase();
	state.log.currentYear = format(fullStampIndex, "yyyy", { locale: ptBR });
}
