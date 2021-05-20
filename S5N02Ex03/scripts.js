function main() {
    // Acudti #1
    var apiUrl = "https://icanhazdadjoke.com/"
    nouAcudit1(apiUrl);
    // Acudti #2
    apiUrl = "https://api.chucknorris.io/jokes/random";
    nouAcudit2(apiUrl);
}
// Obté la API Key d' OpenWeatherMap que passem x parametres a la URL
function getApiKey() {
    const queryString = window.location.search;
    console.log(queryString)
    const urlParams = new URLSearchParams(queryString);
    const APPID = urlParams.get('APPID');
    console.log(APPID);
    return APPID;
}

//Conversor temps format Unix a CET
function unixTime2CET(timestamp) {
    let format = {
        day: "numeric",
        month: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
    };
    let dataNow = new Date(timestamp * 1000).toLocaleString("es-es", format);
    return dataNow;
};

// Obté la Info Meteorològica d'OpenWeatherMap de la ciutat i les unitats indicades
async function openWeatherMap(city, units) {
    let apiUrl = "http://api.openweathermap.org/data/2.5/weather";
    var apiKey = getApiKey();
    console.log(apiKey);
    let urlApiKey = apiUrl + '?q=' + city + '&units=' + units + '&APPID=' + apiKey;
    console.log(urlApiKey);
    const response = await fetch(urlApiKey);
    const data = await response.json();

    let outString =
        'Indret: <b>' + data.name + '</b><br>' +
        'Temps: <b>' + data.weather[0].main + ' (' + data.weather[0].description + ')' + '</b> <br>' +
        'Data/Hora: <b>' + unixTime2CET(data.dt) + '</b><br>' +
        'Temperatura: <b>' + data.main.temp + ' ºC </b><br>' +
        'Humitat: <b>' + data.main.humidity + ' % </b><br>' +
        'Pressió Atmosfèrica: <b>' + data.main.pressure + ' hPa</b><br><br>';
    document.getElementById('infoMeteo').innerHTML = outString;
}

// Obté un acudit de icanhazdadjoke
async function nouAcudit1(apiUrl) {
    let settings = {
        // method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    }
    const response = await fetch(apiUrl, settings);
    const data = await response.json();
    let outString = '<b>Acudit #1</b> <br>' + data.joke + '<br>'
    document.getElementById('Acudit1').innerHTML = outString;
}

// Obté un acudit de ChuckNorris.io
async function nouAcudit2(apiUrl) {
    const response = await fetch(apiUrl);
    const data = await response.json();
    let outString = '<b>Acudit #2</b> <br>' + data.value + '<br>';
    document.getElementById('Acudit2').innerHTML = outString;
}