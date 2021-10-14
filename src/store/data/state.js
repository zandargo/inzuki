export default function () {
	let startDate = new Date(2021, 0, 1, 12, 0, 0);
	let idx0 = Math.round(startDate.valueOf() / 86400000);

	return {
		app: {
			section: "",
			idxDate0: idx0,
			userID: "",
			// logsID: "",
		},
		log: {
			currentIndex: 0,
			currentMonth: "",
			currentYear: "",
			idxCurrent: 0,
		},
		time: {
			stamp: "",
			todayIndex: 0,
			idxToday: 0,

			year: 0,
			month: 0,
			day: 0,

			hours: 0,
			minutes: 0,
			seconds: 0,

			formattedDate: "",
		},
		db: {
			baseIncome: 6,
		},
	};
}
