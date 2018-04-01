/**
	a)  Find the name of the month.
	b)  Find the day.
	c)  Find the day on the same date next year.
		Example:- Input:- 22/4/2017 
          Output:- April
 */
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
//	Ask date from user
	var date = prompt("Please enter date in dd/mm/yyyy format");

	function getMonth(){
		return months[date.getMonth()];
	}
	
	function day() {
		return days[dateString.getDay()];
	}
	
	function getNextYearDate() {
		var d = date.getDate();
		var month = date.getMonth();
		var year = date.getFullYear()+1;
		var dateString =new Date(d, month,year);
		return days[dateString.getDay()];
	}
	
	console.log(getMonth());
	console.log(day());
	console.log(getNextYearDate());