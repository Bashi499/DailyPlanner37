//using momemnt js to get current date
let NowMoment = moment().format("DD.MM.YYYY HH:mm");
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML = NowMoment;
let currentHour = moment().format("HH");


