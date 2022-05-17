function getSevenDayWeatherForecast(getWeather) {
  for (let values of getWeather.properties.periods) {
    console.log(values.name);
    console.log(values.temperature);
  }
}

function getCurrentWeather(getWeather) {
  return getWeather.properties.periods[0];
}

/* 
    1. get location
    2. convert location to longitude and latitude
    3. pass the location to the method that makes the fetch request from weather.gov
    4. parse info from weather. gov
*/

const getThisWeeksWeather = (result) => {
  fetch(result).then((data) => data.json()).then(
    (getWeather) => {
      setSevenDayForecast(getWeather);
      setIsDayOrNight(getWeather);
      localStorage.setItem("locationIsSet", true);
      localStorage.setItem(
        "currentTemp",
        getWeather.properties.periods[0].temperature
      );
      localStorage.setItem(
        "currentTimePeriod",
        getWeather.properties.periods[0].name
      );
      localStorage.setItem(
        "currentCondition",
        getWeather.properties.periods[0].shortForecast
      );
      localStorage.setItem(
        "fullCondition",
        getWeather.properties.periods[0].detailedForecast
      );
      localStorage.setItem("userTemp", 0);
    })
    .catch(console.error);
};

const setIsDayOrNight = (weatherDataOBJ) => {
  localStorage.setItem("isDay", weatherDataOBJ.properties.periods[0].isDaytime);
};

const setSevenDayForecast = (weatherDataOBJ) => {
  localStorage.setItem(
    "SevenDayForecast",
    JSON.stringify(weatherDataOBJ.properties.periods)
  );
};

const getTempAtCurrentLocationAndRenderData = () => {
  const addressOrZip = document.querySelector("#myLocation").value;

  /* checks that input is a 5 digit number */
  const isZip = /\b\d{5}\b/;

  if (isZip.test(addressOrZip)) {
    localStorage.setItem("currentLocation", addressOrZip);

    /* key was deleted for security purposes */

    if (!localStorage.getItem(addressOrZip)) {
      alert(config.MY_KEY)
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${addressOrZip}&key=${config.MY_KEY}`
      )
        .then((data) => data.json())
        .then((data) => {
          localStorage.setItem(
            addressOrZip,
            JSON.stringify({
              cityName: data.results[0].address_components[1].long_name,
              latitude: data.results[0].geometry.location.lat,
              longitude: data.results[0].geometry.location.lng,
            })
          );
        })
        .then(fetchForecast)
        .then((data) => getThisWeeksWeather(data))
        .catch(console.log);
    } else {
      fetchForecast()
        .then((data) => getThisWeeksWeather(data))
        .catch(console.log);
    }
    printProcessingMessage();
  } else {
    document.querySelector("#invalidZip").style.display = "inline";

    setTimeout(() => {
      document.querySelector("#invalidZip").style.display = "none";
    }, 3000);
  }
};

const printProcessingMessage = () => {
  let currentValue = 10;
  const mainContainer = document.querySelector(".mainContainer");
  setTimeout(() => {
    currentValue += 10;
  }, 100);

  let updateProgressBar = setInterval(update, 20);

  function update() {
    if (currentValue > 100) {
      clearInterval(updateProgressBar);
    } else {
      mainContainer.innerHTML = `<h1>Processing...</h1>
        <div class="progress">
          <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${currentValue}%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        `;
      currentValue += 10;
    }
  }
};

const fetchForecast = () => {
  const longAndLatOBJ = getLocationInfoFromLocalStorage();
  const latitude = longAndLatOBJ.latitude;
  const longitude = longAndLatOBJ.longitude;

  return fetch(`https://api.weather.gov/points/${latitude},${longitude}`)
    .then((data) => data.json())
    .then((data) => {
      return data.properties.forecast;
    }).catch(console.error);
};


function getLocationInfoFromLocalStorage() {
  return JSON.parse(localStorage.getItem(localStorage.currentLocation));
}
