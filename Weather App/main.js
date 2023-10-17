document.querySelectorAll("#btn")[0].addEventListener('click', () => {
    city = document.getElementById("city_name").value
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q= ${city} &appid=0fcd6a52b8947973e9492af60c94a84b`;


    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const description = data.weather[0].description;
            const temperature = data.main.temp;

            console.log(`Weather: ${description}`);
            console.log(`Temperature: ${temperature}°C`);
            result = `${city} has ${description} currently, with a temperature of about ${Math.round(temperature / 10)}°C equivalent to ${(Math.round((temperature * (9 / 5)) + 32) / 10)}F`
            console.log(result)
            document.getElementById("results").textContent = result
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


})
autoResize = setInterval(() => {
    if (innerHeight < 500) {
        document.body.style.height = 500 + "px"
    } else {
        document.body.style.height = innerHeight + "px"
    }
}, 1);

