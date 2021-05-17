function main() {
    var apiUrl = "https://icanhazdadjoke.com/"
    nouAcudit1(apiUrl);
    apiUrl = "https://api.chucknorris.io/jokes/random";
    nouAcudit2(apiUrl);
}
async function nouAcudit1(apiUrl) {
    const response = await fetch(apiUrl, {
        // method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    });
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