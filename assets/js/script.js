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
      for (let i = 0; i < 5; i++) {
        document.getElementById("card-date" + (i + 1)).innerHTML =
          "Date: " + data.list[i].dt_txt;
      }
      //loop for weather icon on cards
      for (let i = 0; i < 5; i++) {
        document.getElementById("card-weatherIcon" + (i + 1)).src =
          "http://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
      }
      //loop for temp on cards
      for (let i = 0; i < 5; i++) {
        document.getElementById("card-temp" + (i + 1)).innerHTML =
          "Temp: " + data.list[i].main.temp + "°";
      }
      //loop for wind speed on card
      for (let i = 0; i < 5; i++) {
        document.getElementById("card-wind" + (i + 1)).innerHTML =
          "Wind: " + data.list[i].wind.speed + "MPH";
      }
      //loop for humidity on card
      for (let i = 0; i < 5; i++) {
        document.getElementById("card-humidity" + (i + 1)).innerHTML =
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

          
document.getElementById(
            "cityDate"
          ).innerHTML = `${data.city.name} (${currentDate.toDateString()})`;
          document.getElementById(
            "cityDate"
          ).innerHTML += `<img id="weatherIconMain" src="http://openweathermap.org/img/wn/${currentData.weather[0].icon}.png">`;
        
        mainTemp.innerHTML += "Temp: " + currentData.main.temp + '°'
        mainWind.innerHTML = "Wind: " + currentData.wind.speed + ' MPH'
        mainHumidity.innerHTML = "Humidity: " + currentData.main.humidity + "%"
          
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

// function handleSubmit(event) {
//     event.preventDefault()
//     const citySearch = searchInput.value
//     console.log(citySearch)

//     if (citySearch) {
//         location.href = `./index.html?citySearch=${citySearch}`
//         }

//     }
