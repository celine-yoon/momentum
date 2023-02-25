function onGeoSuccess(position) {
  console.log(position);
  const API_KEY = "13f859a1e2b38e6d3a3366aa50b30ab8";
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const temp = document.querySelector("#weather span:nth-child(2)");
      const weather = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      temp.innerText = `${Math.floor(data.main.temp)}°`;
      weather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
  alert("Can't find your location! No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
