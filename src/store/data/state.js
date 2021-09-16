export default function () {
	let startDate = new Date(2015, 0, 1, 12, 0, 0);
	let idx0 = Math.round(startDate.valueOf() / (1000 * 3600 * 24));

	return {
		app: {
			section: "",
			idxDate0: idx0,
		},
		time: {
			stamp: "",
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
