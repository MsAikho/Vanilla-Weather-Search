function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
   let descriptionElement = document.querySelector("#description");
   let humidityElement = document.querySelector("#humidity");
   let windspeedElement = document.querySelector("#wind-speed");


   console.log (response.data);

   cityElement.innerHTML = response.data.city;
   descriptionElement.innerHTML = response.data.condition.description;
   humidityElement.innerHTML = `${response.data.temperature.humidity}%`
   windspeedElement.innerHTML = ` ${response.data.wind.speed} km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apikey = "32b37e6231bf7tb9f483785a00o2c334";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity(Durban)