// task 1 --------------------
const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "79cd292699d0cf9c0bcce86540c4ac0b"
}

const cities =  {
	
	
	703448: "Киев",
	2761333: "Вена",
	2643743 : "Лондон",
	625143 : "Минск",
	4033936 : "Папеэте"
 };


let sel = document.createElement('select');
document.querySelector('.out__town').append(sel);

sel.classList.add("city");



for (const key in cities) {	
	let opt = document.createElement('option');
	opt.value = key;
	opt.innerHTML = cities[key];
	sel.append(opt);	
		
}
document.querySelector('.sel').append(sel);











function getWeather() {
	const cityId = document.querySelector('.city').value;
	console.log(cityId);
	let town = cities[sel.value];
	document.querySelector('.out__town').innerHTML = town;
	fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
}

getWeather(); 
document.querySelector('.city').onchange = getWeather;

// function nameC() {
	
	
//   }
//   nameC();
// sel.onchange = nameC;



function showWeather(data) {	
	document.querySelector('.out__deg').innerHTML = Math.round(data.main.temp)  + "&#176;";
	document.querySelector('.out__humidity_curent').innerHTML = data.main.humidity  + "&#176;";
	document.querySelector('.out__wind_power').innerHTML = Math.round(data.wind.speed)  + `<span> метров в секунду</span>`;


	
	
	console.log(data);
}