function updateTime() {
  let parisElement = document.querySelector("#paris");
  let singaporeElement = document.querySelector("#singapore");
  let dubaiElement = document.querySelector("#dubai");
  let amsterdamElement = document.querySelector("#amsterdam");
  let currentCityElement = document.querySelector("#current");

  // Current city time based on user's timezone
  if (currentCityElement) {
    let dateElement = currentCityElement.querySelector(".city-date");
    let timeElement = currentCityElement.querySelector(".city-time");
    let actualTime = moment().tz(moment.tz.guess()); // Correct way to get user's timezone

    dateElement.innerHTML = actualTime.format("MMMM Do YYYY");
    timeElement.innerHTML = actualTime.format("h:mm:ss [<small>]A[</small>]");
  }

  // Paris time
  if (parisElement) {
    let dateElement = parisElement.querySelector(".city-date");
    let timeElement = parisElement.querySelector(".city-time");
    let actualTime = moment().tz("Europe/Paris");

    dateElement.innerHTML = actualTime.format("MMMM Do YYYY");
    timeElement.innerHTML = actualTime.format("h:mm:ss [<small>]A[</small>]");
  }

  // Singapore time
  if (singaporeElement) {
    let dateElement = singaporeElement.querySelector(".city-date");
    let timeElement = singaporeElement.querySelector(".city-time");
    let actualTime = moment().tz("Asia/Singapore");

    dateElement.innerHTML = actualTime.format("MMMM Do YYYY");
    timeElement.innerHTML = actualTime.format("h:mm:ss [<small>]A[</small>]");
  }

  // Dubai time
  if (dubaiElement) {
    let dateElement = dubaiElement.querySelector(".city-date");
    let timeElement = dubaiElement.querySelector(".city-time");
    let actualTime = moment().tz("Asia/Dubai");

    dateElement.innerHTML = actualTime.format("MMMM Do YYYY");
    timeElement.innerHTML = actualTime.format("h:mm:ss [<small>]A[</small>]");
  }

  // Amsterdam time
  if (amsterdamElement) {
    let dateElement = amsterdamElement.querySelector(".city-date");
    let timeElement = amsterdamElement.querySelector(".city-time");
    let actualTime = moment().tz("Europe/Amsterdam");

    dateElement.innerHTML = actualTime.format("MMMM Do YYYY");
    timeElement.innerHTML = actualTime.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName =
    cityTimeZone.replace("_", " ").split("/")[1] || "Your Location";
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
    </div>
  `;

  //Interval for Updating time for all cities
  setInterval(() => {
    updateCity(event);
  }, 1000);
}

// Initial call and interval for updating time
updateTime();
setInterval(updateTime, 1000);

// Event listener for city selection
let citiesSelectElement = document.querySelector("#cities-select");
citiesSelectElement.addEventListener("change", updateCity);
