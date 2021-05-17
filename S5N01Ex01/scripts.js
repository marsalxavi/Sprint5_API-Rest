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
}

async function nouAcudit2(apiUrl) {
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(data.value);
}