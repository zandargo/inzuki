import { format } from "date-fns";
import { ptBR, en } from "date-fns/locale";

//* ---------------------------- HELPER FUNCTIONS ---------------------------- */
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

//* ----------------------------- SET BASE INCOME ---------------------------- */
export function SET_BASE_INCOME(state, payload) {
	console.log("SetBaseIncome", payload.value);
	state.db.baseIncome = payload.value;
}
//* ---------------------------- SET CURRENT TIME ---------------------------- */
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

//* ------------------------------ SET LOG INDEX ----------------------------- */
export function SET_LOG_INDEX(state, valIndex) {
	state.log.currentIndex = valIndex.value;
	let stampIndex = valIndex.value + state.app.idxDate0;
	state.log.idxCurrent = stampIndex;

	let fullStampIndex = stampIndex * 86400000;

	// let startDay = 20;
	let tmpDate = new Date(fullStampIndex);

	// tmpDate.getDate() > startDay
	// 	? tmpDate.setMonth(tmpDate.getMonth() + 1)
	// 	: false;

	state.log.currentMonth = format(tmpDate, "MMMM", {
		locale: ptBR,
	}).toUpperCase();
	state.log.currentYear = format(tmpDate, "yyyy", { locale: ptBR });
}

//* -------------------------- SET FIREBASE USER ID -------------------------- */
// export function SET_USERID(state, id) {
export function mutSetUserID(state, id) {
	state.app.userID = id;
}
// export function SET_USERINFO(state, user) {
export function mutSetUserInfo(state, user) {
	state.app.userEmail = user.email;
	state.app.userName = user.userName;
}

//* --------------------------- TEST PUSH TO ARRAY --------------------------- */
export function TESTPUSH(state, payload) {
	state.aTest.push(payload);
}
