function updateTime() {
  let parisElement = document.querySelector("#paris");
  let singaporeElement = document.querySelector("#singapore");
  let dubaiElement = document.querySelector("#dubai");
  let amsterdamElement = document.querySelector("#amsterdam");
  let currentCityElement = document.querySelector("#current");

  //if (currentCityElement) {
  //let DateElement = currentCityElement.querySelector("#city-date");
  //let TimeElement = currentCityElement.querySelector("#city-time");
  //let ActualTime = moment().tz().guess;

  //DateElement.innerHTML = ActualTime.format("MMMM Do YYYY");
  //TimeElement.innerHTML = ActualTime.format("h:mm:ss [<small>]A[</small>]");
  //}

  if (parisElement) {
    let DateElement = parisElement.querySelector(".city-date");
    let TimeElement = parisElement.querySelector(".city-time");
    let ActualTime = moment().tz("Europe/Paris");

    DateElement.innerHTML = ActualTime.format("MMMM Do YYYY");
    TimeElement.innerHTML = ActualTime.format("h:mm:ss [<small>]A[</small>]");
  }

  if (singaporeElement) {
    let DateElement = singaporeElement.querySelector(".city-date");
    let TimeElement = singaporeElement.querySelector(".city-time");
    let ActualTime = moment().tz("Asia/Singapore");

    DateElement.innerHTML = ActualTime.format("MMMM Do YYYY");
    TimeElement.innerHTML = ActualTime.format("h:mm:ss [<small>]A[</small>]");
  }

  if (dubaiElement) {
    let DateElement = dubaiElement.querySelector(".city-date");
    let TimeElement = dubaiElement.querySelector(".city-time");
    let ActualTime = moment().tz("Asia/Dubai");

    DateElement.innerHTML = ActualTime.format("MMMM Do YYYY");
    TimeElement.innerHTML = ActualTime.format("h:mm:ss [<small>]A[</small>]");
  }

  if (amsterdamElement) {
    let DateElement = amsterdamElement.querySelector(".city-date");
    let TimeElement = amsterdamElement.querySelector(".city-time");
    let ActualTime = moment().tz("Europe/Amsterdam");

    DateElement.innerHTML = ActualTime.format("MMMM Do YYYY");
    TimeElement.innerHTML = ActualTime.format("h:mm:ss [<small>]A[</small>]");
  }

  if (amsterdamElement) {
    let DateElement = amsterdamElement.querySelector(".city-date");
    let TimeElement = amsterdamElement.querySelector(".city-time");
    let ActualTime = moment().tz("Europe/Amsterdam");

    DateElement.innerHTML = ActualTime.format("MMMM Do YYYY");
    TimeElement.innerHTML = ActualTime.format("h:mm:ss [<small>]A[</small>]");
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityDateTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities-grid");

  citiesElement.style.display = "block";
  citiesElement.innerHTML = `
  <div class="current-city">
  <div class="name-date-container">
          <div class="city-name">${cityName}</div>
          <div class="city-date">${cityDateTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="city-time">${cityDateTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#cities-select");
citiesSelectElement.addEventListener("change", updateCity);
