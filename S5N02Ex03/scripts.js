function main() {
    var apiUrl = "https://icanhazdadjoke.com/"
    // nouAcudit1(apiUrl);
    apiUrl = "https://api.chucknorris.io/jokes/random";
    // nouAcudit2(apiUrl);
    apiUrl = "https://opendata.aemet.es/opendata/sh/a5fab0ee/"
    // aemet(apiUrl);
}

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

async function openWeather(city, units) {

    // http://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&APPID=97ab277f393b72bfccd4d6886b7c32fc
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather";
    var apiKey = "97ab277f393b72bfccd4d6886b7c32fc";
    var urlApiKey = apiUrl + '?q=' + city + '&units=' + units + '&APPID=' + apiKey;
    console.log(urlApiKey);
    const response = await fetch(urlApiKey);
    const data = await response.json();
    console.log(unixTime2CET(data.dt));
    console.log(data.main.temp);
    console.log(data.main.humidity);
    console.log(data.main.pressure);
    document.write('Data/Hora: ');
    document.write(unixTime2CET(data.dt));
    document.write('<br>Temperatura: ');
    document.write(data.main.temp);
    document.write(' ºC<br>Himitat: ');
    document.write(data.main.humidity);
    document.write(' %<br>Pressió Atmosfèrica: ');
    document.write(data.main.pressure);
    document.write(' bars<br>');
}

async function nouAcudit1(apiUrl) {
    let settings = {
        // method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    }
    const response = await fetch(apiUrl, settings);
    const data = await response.json();
    console.log(data.joke);
    document.write('<b>Acudit #1</b> <br>');
    document.write(data.joke);
    document.write('<br>');
}

async function nouAcudit2(apiUrl) {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data.value);
    document.write('<b>Acudit #2:</b> <br>');
    document.write(data.value);
    document.write('<br>');
}