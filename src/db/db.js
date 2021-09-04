import Dexie from "dexie";

export const db = new Dexie("InzukiDB");
db.version(1).stores({
	dow: "++id, date, in, out, profit, xhours, whours, nwhours",
});
db.open();
