const apiKey = "Hide enter yours";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (city === "") {
    alert("Enter city name");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      if (data.cod !== 200) {
        alert("City not found");
        return;
      }

      document.getElementById("location").innerText = data.name;
      document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
      document.getElementById("status").innerText = data.weather[0].main;
      document.getElementById("humidity").innerText =
        "Humidity: " + data.main.humidity + "%";
      document.getElementById("wind").innerText =
        "Wind: " + data.wind.speed + " km/h";
    })
    .catch(error => {
      console.error(error);
      alert("Error! Open console (F12)");
    });
}

