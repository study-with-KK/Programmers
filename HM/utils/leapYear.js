const leapYear = year => {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	// return (year % 4 !== 0 || year % 100 === 0) && year % 400 !== 0;
};
