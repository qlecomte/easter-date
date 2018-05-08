function easter(year){
	easter(year, false);
}

function easter(year, asString){
	if (year instanceof Date){
		year = year.getFullYear();
	}

	let easterDate;

	if (year >= 1583){
		// Gregorian calendar
		const a = year % 19;
		const b = year % 4;
		const c = year % 7;
		const k = Math.floor(year / 100);
		const p = Math.floor((13 + 8 * k) / 25);
		const q = Math.floor(k / 4);
		const M = (15 - p + k - q) % 30;
		const N = (4 + k - q) % 7;
		const d = (19 * a + M) % 30;
		const e = (2*b + 4*c + 6*d + N) % 7;

		const H = 22 + d + e;
		let Q = H - 31;

		
		if (Q > 0){
			// We are in April
			if (d === 29 && e === 6){
				Q = 19;
			} else if (d === 28 && e === 6 && ((11*M+11) %30)<19){
				Q = 18;
			}

			easterDate = year + "-04-" + (Q > 9 ? "" + Q: "0" + Q);
		} else {
			// We are in March
			easterDate = year + "-03-" + (H > 9 ? "" + H: "0" + H);
		}

	} else if (year >= 325) {
		// Julian Calendar
	}

	if (asString){
		return easterDate;
	} else {
		return new Date(easterDate);
	}

	
}

module.exports = easter;