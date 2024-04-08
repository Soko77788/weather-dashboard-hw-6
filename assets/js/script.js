



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
                //         // Access each item in the array
                //         // const item = data.list[i];
                        
                //         // // Access each item's dt_txt property to get the date
                //         // const date = item.dt_txt;
                        
                //         // // Create a new <p> element to display the date
                //         // const dateElement = document.createElement('p');
                //         // dateElement.textContent = date;
                        
                //         // // Append the date element to the cardDate element or any other element as needed
                //         // cardDate.appendChild(dateElement);
                        
                //         // // You can perform additional operations with other properties of 'item' here
                //     }
                });
            });
            
                //     for(i = 0; i<5; i++){
                //         document.getElementById("card-date" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
                //         //Number(1.3450001).toFixed(2); // 1.35
                //     }
                
                //     for(i = 0; i<5; i++){
                //         document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
                //     }
                //     //------------------------------------------------------------
                
                //     //Getting Weather Icons
                //      for(i = 0; i<5; i++){
                //         document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
                //         data.list[i].weather[0].icon
                //         +".png";
                //     }
                //     //------------------------------------------------------------
                //     console.log(data)
                
                
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


// console.log(searchBtn, searchInput)


// console.log('turkey')