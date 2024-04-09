



const searchInput = document.getElementById('citySearch')
const searchBtn = document.getElementById('searchBtn')
const APIkey = '40591cbd3b73cc2ec73be5cdc2703ba9'
const city = searchInput.value
const cardDate = document.getElementById('card-date')
const cardWeatherIcon = document.getElementById('card-weatherIcon')
const cardTemp = document.getElementById('card-temp')
const cardWind = document.getElementById('card-wind')
const cardHumidity = document.getElementById('card-humidity')


searchBtn.addEventListener('click', function(){
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${APIkey}&units=imperial&`)
                .then(function(response){
                    return response.json()
                })
                .then(function(data){ console.log(data)
                    //loop for dates in the cards
                    for (let i = 0; i < 5; i++) {
                        document.getElementById("card-date" + (i+1)).innerHTML = "Date: " + data.list[i].dt_txt
                    }
                    //loop for weather icon on cards
                    for (let i = 0; i < 5; i++) {
                        document.getElementById("card-weatherIcon" + (i+1)).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + '.png';
                        

                    }
                    //loop for temp on cards
                    for (let i = 0; i < 5; i++) {
                        document.getElementById("card-temp" + (i+1)).innerHTML = "Temp: " + data.list[i].main.temp + '°'

                    }
                    //loop for wind speed on card
                    for (let i = 0; i < 5; i++) {
                        document.getElementById("card-wind" + (i+1)).innerHTML = "Wind: " + data.list[i].wind.speed + 'MPH'

                    }
                    //loop for humidity on card
                    for (let i = 0; i < 5; i++) {
                        document.getElementById("card-humidity" + (i+1)).innerHTML = "Humidity: " + data.list[i].main.humidity

                    }
               
                });
            });
            
                
                
                
                // })
                
                // .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
                // })
                
                // function DefaultScreen(){
                //     document.getElementById("cityInput").defaultValue = "London";
                //     GetInfo();
                // }


// fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=32ba0bfed592484379e51106cef3f204')
// .then(response => response.json())
// .then(data => {

    //Getting the min and max values for each day
    

    
    
    //------------------------------------------------------------

    //Getting Weather Icons
  








// function handleSubmit(event) {
//     event.preventDefault()
//     const citySearch = searchInput.value
//     console.log(citySearch)

//     if (citySearch) {
//         location.href = `./index.html?citySearch=${citySearch}`
//         }

//     }





