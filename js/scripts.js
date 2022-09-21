// Variáveis e seleção de elementos
const apiKey = "d1f91e3e0c0295a1658725794a6d63e0";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

// Funções
const showWeatherData = (city) => {
    console.log(city)
}

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

        const city = cityInput.value;

        showWeatherData(city);
});