const apiKey = 'ac60b654344f969cc41a92b78f254a9b'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

const searchInput = document.querySelector('.search-box input')
const searchButton = document.querySelector('.search-box button')

const weatherIcon = document.querySelector('.weather-image i')
const weather = document.querySelector('.weather')
const error = document.querySelector('.error')


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status == 404) {
        weather.style.display = 'none'
    } else {
        const data = await response.json()
        console.log(data)

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "&#8451";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


        if (data.weather[0].main == "Clear") {
            weatherIcon.className = " bi-brightness-high-fill";
            weatherIcon.style.color = 'yellow'
            document.body.style.backgroundImage = 'url(../images/michael-diane-weidner-h-rP5KSC2W0-unsplash.jpg)'
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.className = "bi-cloud-drizzle-fill";
            weatherIcon.style.color = '#0e4669'
            document.body.style.backgroundImage = ' url(../images/valentin-muller-bWtd1ZyEy6w-unsplash.jpg)'
        } else if (data.weather[0].main == "Clouds") {
            weatherIcon.className = "bi-cloud-fill";
            weatherIcon.style.color = '#0e4669'
            document.body.style.backgroundImage = 'url(../images/chuttersnap-rk2s0sm8xF4-unsplash.jpg)'
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.className = "bi-cloud-drizzle-fill";
            weatherIcon.style.color = '#0e4669'
            document.body.style.backgroundImage = 'url(../images/chuttersnap-rk2s0sm8xF4-unsplash.jpg)'
        }


        weather.style.display = "block";
    }
}

searchButton.addEventListener('click', () => {
    checkWeather(searchInput.value)
    searchInput.value = ''
})

searchInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        checkWeather(searchInput.value);
        searchInput.value = "";
    }
});