



const searchInput = document.getElementById('citySearch')
const searchBtn = document.getElementById('searchBtn')
const APIkey = '40591cbd3b73cc2ec73be5cdc2703ba9'
const city = searchInput.value


searchBtn.addEventListener('click', function(){
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${APIkey}&units=imperial`)
                .then(function(response){
                    return response.json()
                })
                .then(function(results){
                    console.log(results)
            
                })

})


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