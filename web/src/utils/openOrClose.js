export default function openOrClose(hours) {
	// Getting Day and Hours of Now
	const dayNow = new Date().getDay() + 5;
	const hoursNow = new Date().getHours();

	console.log(hoursNow)
	const hoursString = String(hoursNow);

 
	const daysOpen = hours.map(hour => hour).filter(day => day.days.includes(dayNow));

	//console.log(daysOpen)

	if(daysOpen.length > 1) {
		console.log(daysOpen)

		//const openHere = daysOpen.filter(hour => hour.from.substr(0,2) >= hoursString && hoursString < hour.to.substr(0,2));
		const hoursOfDayOpen = daysOpen.filter(hours => hoursString === hour.to.substr(0,2));

		console.log(hoursOfDayOpen)

		if(hoursOfDayOpen.length === 1) {
			return 'Aberto agora';
		} else {
			return 'Fechado';
		}
		//.filter(hours => hoursString >= hours.from.substr(0,2))
	
		// if(openHere) {
		// 	return 'Aberto agora';
		// } else {
		// 	return 'Fechado'
		// }

	} else {
		const openHours = daysOpen[0].from.substr(0,2);
		const closeHours = daysOpen[0].to.substr(0,2);

		if(hoursString >= openHours && hoursString < closeHours) {
			return 'Aberto agora'
		} else {
			return 'Fechado'
		}
	}


	//const hoursOpen = hours.filter(hour => hour.from.substr(0,2) === hoursString);


	// if(hoursOpen.length === 0) {
	// 	return 'Fechado';
	// } else {
	// 	const daysOpen = hoursOpen.map(day => day.days).includes(dayNow);
	// 	return console.log(daysOpen)
	// }


	//const daysWeek = hours.filter((day, index) => index === 0);

	//const dayOpen = daysWeek[0].days.includes(dayNow);
	
}