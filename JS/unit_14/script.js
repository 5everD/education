const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "efa241448ac577342d303f62305542e5"
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}&lang=ru`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

function getWeather2() {
    const cityId = document.querySelector('.city-select').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}&lang=ru`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

let arrDate = ['Воскресенье', 'Понедельник', 'Вторник', 'Стреда', 'Четверг', 'тЯпница', 'Суббота'];
let arrDate2 = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

const cities = {
    703448: "Kyiv",
    2643743: "London",
    625144: "Minsk"
}

function showWeather(data) {
    console.log(data);
    document.querySelector('.location').innerHTML = data.name;
    document.querySelector('.weather-temp').innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector('.date-dayname').innerHTML = arrDate[(new Date()).getDay()];
    document.querySelector('.date-day').innerHTML = (new Date()).getDate() + ' ' + arrDate2[(new Date()).getMonth()] + ' ' + (new Date()).getFullYear();
    document.querySelector('.weather-desc').innerHTML = data.weather[0].description;
    document.querySelector('.humidity .value').innerHTML = data.main.humidity + ' ' + `&#65130;`;
    document.querySelector('.precipitation .value').innerHTML = data.clouds.all + ' ' + `&#65130;`;
    document.querySelector('.wind .value').innerHTML = Math.round(data.wind.speed) + ' ' + `км/ч`;
    document.querySelector('.pressure .value').innerHTML = Math.round(data.main.pressure / 1.333) + ' ' + `мм.р.с.`;
    document.querySelector('.weather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
}

function f1() {
    if (document.querySelector('.city-select')) {
        stop;
    }
    else {
        let select = document.createElement('select');
        select.className = 'city-select';
        document.querySelector('.week-container').append(select);
        for (let key in cities) {
            let option = document.createElement('option');
            document.querySelector('.city-select').append(option);
            option.innerHTML = cities[key];
            option.value = [key];
            if (key == 703448) {
                option.selected = true;
            }
        }
        getWeather2();
        document.querySelector('.city-select').onchange = getWeather2;
    }
}

getWeather();
document.querySelector('#city').onchange = getWeather;
document.querySelector('.location-button').onclick = f1;


