//state variable
let weatherData;

// cached element references - selected DOM elements

const $city = $('#city');
const $temp = $('#temp');
const $feelsLike = $('#feels-like');
const $weather = $('#weather');
const $input = $('input[type="text"]');


const API_KEY = '13a1d29935af62336efa71be747cea94'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';


//event listeners
$('form').on('submit', handleSubmit);


//functions
function handleSubmit(evt) {
    evt.preventDefault();

    console.log('submit success')
    
    
    const term = $input.val();

    $input.val('')



    $.ajax(`${BASE_URL}?appid=${API_KEY}&q=${term}&units=imperial`)
    .then(function(data) {
        console.log(data);
        weatherData = data;
        render();
    })
}

    function render () {
        $city.text(weatherData.name);
        // $city.text($city.text()+weatherData.name);
        $temp.text(weatherData.main.temp);
        $feelsLike.text(weatherData.main.feels_like);
        $weather.text(weatherData.weather[0].description);
    }



