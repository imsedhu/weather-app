//weather api key & apiurl
const apiKey = "22e48ec4f0ba5dc3c2070847b37700de";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



//element select
const cityName = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const btn = document.querySelector(".btn");
const input = document.querySelector("#city-input");
const weatherIcon = document.querySelector(".weather-display .weather-img");

async function checkWeather(city) {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if(res.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else{
    let data = await res.json();
  

  cityName.innerHTML = data.name;
  temp.innerHTML = Math.round(data.main.temp) + "°C";
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + " Km/h";

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png";
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png";
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png";
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png";
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png";
  }
  else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "images/snow.png";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
  }
  
}

btn.addEventListener('click', ()=>{
  checkWeather(input.value);
})

