const searchInput = document.getElementById("citySearch");
const searchBtn = document.getElementById("searchBtn");
const APIkey = "40591cbd3b73cc2ec73be5cdc2703ba9";
const city = searchInput.value;
const cardDate = document.getElementById("card-date");
const cardWeatherIcon = document.getElementById("card-weatherIcon");
const cardTemp = document.getElementById("card-temp");
const cardWind = document.getElementById("card-wind");
const cardHumidity = document.getElementById("card-humidity");
const weatherIconMain = document.getElementById("weatherIconMain");
const mainTemp = document.getElementById("mainTemp");
const mainWind = document.getElementById("mainWind");
const mainHumidity = document.getElementById("mainHumidity");

searchBtn.addEventListener("click", function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${APIkey}&units=imperial&`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //loop for dates in the cards
      for (let i = 0; i < data.list.length; i += 8) {
        document.getElementById("card-date" + (i / 8 + 1)).innerHTML =
          data.list[i].dt_txt.slice(0, 10);
        //loop for weather icon on cards
        document.getElementById("card-weatherIcon" + (i / 8 + 1)).src =
          "http://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
        //loop for temp on cards
        document.getElementById("card-temp" + (i / 8 + 1)).innerHTML =
          "Temp: " + data.list[i].main.temp + "°";
        //loop for wind speed on card
        document.getElementById("card-wind" + (i / 8 + 1)).innerHTML =
          "Wind: " + data.list[i].wind.speed + "MPH";
        //loop for humidity on card
        document.getElementById("card-humidity" + (i / 8 + 1)).innerHTML =
          "Humidity: " + data.list[i].main.humidity;
      }

      // store lat and lon for 2nd fetch
      const lat = data.city.coord.lat;
      const lon = data.city.coord.lon;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (currentData) {
          // Displaying city followed by the date
          const currentDate = new Date(currentData.dt * 1000); // Convert timestamp to milliseconds

          document.getElementById("cityDate").innerHTML = `${
            currentData.name
          } (${currentDate.toDateString()})`;
          document.getElementById(
            "cityDate"
          ).innerHTML += `<img id="weatherIconMain" src="http://openweathermap.org/img/wn/${currentData.weather[0].icon}.png">`;

          mainTemp.innerHTML = "Temp: " + currentData.main.temp + "°";
          mainWind.innerHTML = "Wind: " + currentData.wind.speed + " MPH";
          mainHumidity.innerHTML =
            "Humidity: " + currentData.main.humidity + "%";

          console.log(currentData);
        })
        .catch(function (error) {
          console.error("Error fetching weather data:", error);
        });
    })
    .catch(function (error) {
      console.error("Error fetching forecast data:", error);
    });
});

const searchedCitiesDiv = document.getElementById("searchedCity");

// Listen for clicks on the search button
searchBtn.addEventListener("click", function () {
  const searchedCity = searchInput.value.trim();
  if (searchedCity) {
    // Store the searched city in local storage
    let searchedCities =
      JSON.parse(localStorage.getItem("searchedCities")) || [];
    searchedCities.push(searchedCity);
    localStorage.setItem("searchedCities", JSON.stringify(searchedCities));

    // Render the searched cities from local storage
    renderSearchedCities();

    // Clear the search input
    searchInput.value = "";
  }
});

// Render the searched cities from local storage
function renderSearchedCities() {
  searchedCitiesDiv.innerHTML = "";
  const searchedCities =
    JSON.parse(localStorage.getItem("searchedCities")) || [];
  searchedCities.forEach((city) => {
    const cityButton = document.createElement("button");
    cityButton.textContent = city;
    cityButton.classList.add("btn", "btn-secondary", "m-1");
    cityButton.addEventListener("click", function () {
      // Retrieve weather data for the clicked city and display it
      fetchWeatherData(city);
    });
    searchedCitiesDiv.appendChild(cityButton);
  });
}

// Function to fetch weather data for a city
function fetchWeatherData(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=imperial&`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      updateUi(data);
      console.log(data);

      const lat = data.city.coord.lat;
      const lon = data.city.coord.lon;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (currentData) {
          updateUi2(currentData);
          console.log(currentData);
        });

      // Fetch weather data for the specified city
      // Display the weather data in the appropriate sections
    });
}

function updateUi(data) {
  for (let i = 0; i < data.list.length; i += 8) {
    document.getElementById("card-date" + (i / 8 + 1)).innerHTML = data.list[
      i
    ].dt_txt.slice(0, 10);
    //loop for weather icon on cards
    document.getElementById("card-weatherIcon" + (i / 8 + 1)).src =
      "http://openweathermap.org/img/wn/" +
      data.list[i].weather[0].icon +
      ".png";
    //loop for temp on cards
    document.getElementById("card-temp" + (i / 8 + 1)).innerHTML =
      "Temp: " + data.list[i].main.temp + "°";
    //loop for wind speed on card
    document.getElementById("card-wind" + (i / 8 + 1)).innerHTML =
      "Wind: " + data.list[i].wind.speed + "MPH";
    //loop for humidity on card
    document.getElementById("card-humidity" + (i / 8 + 1)).innerHTML =
      "Humidity: " + data.list[i].main.humidity;
  }
}

function updateUi2(currentData) {
  const currentDate = new Date(currentData.dt * 1000); // Convert timestamp to milliseconds

  document.getElementById("cityDate").innerHTML = `${
    currentData.name
  } (${currentDate.toDateString()})`;
  document.getElementById(
    "cityDate"
  ).innerHTML += `<img id="weatherIconMain" src="http://openweathermap.org/img/wn/${currentData.weather[0].icon}.png">`;

  mainTemp.innerHTML = "Temp: " + currentData.main.temp + "°";
  mainWind.innerHTML = "Wind: " + currentData.wind.speed + " MPH";
  mainHumidity.innerHTML = "Humidity: " + currentData.main.humidity + "%";
}

// Initial rendering of searched cities from local storage
renderSearchedCities();
