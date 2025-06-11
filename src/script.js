let originalContent = "";
let globalIntervalId = null;
let cityIntervalId = null;

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
  clearInterval(globalIntervalId); // Stop global updates
  clearInterval(cityIntervalId); // Clear previous city interval

  let cityTimeZone = event.target.value;
  if (cityTimeZone === "") return;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName =
    cityTimeZone.replace("_", " ").split("/")[1] || "Your Location";
  let cityDateTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities-grid");

  citiesElement.innerHTML = `
    <div class="current-city" id="current">
      <div class="name-date-container">
        <div class="city-name" id="city-name">${cityName}</div>
        <div class="city-date" id="city-date">${cityDateTime.format(
          "MMMM Do YYYY"
        )}</div>
      </div>
      <div class="city-time" id="city-time">${cityDateTime.format(
        "h:mm:ss [<small>]A[</small>]"
      )}</div>
    </div>
  `;
  citiesElement.style.display = "block";

  document.querySelector("#return-button").style.display = "block";

  // Live update for selected city only
  cityIntervalId = setInterval(() => {
    updateCity(event);
  }, 1000);
}

//Update current city wven in the 2 page
setInterval(updateTime, 1000);

function returnPage() {
  let citiesElement = document.querySelector("#cities-grid");
  let returnButton = document.querySelector("#return-button");

  // Restore original content
  citiesElement.innerHTML = originalContent;
  citiesElement.style.display = "grid";

  // Hide return button
  returnButton.style.display = "none";

  // Reset dropdown
  document.querySelector("#cities-select").value = "";

  // Clear city interval and restore global one
  clearInterval(cityIntervalId);
  globalIntervalId = setInterval(updateTime, 1000);
}

// Save original content when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  originalContent = document.querySelector("#cities-grid").innerHTML;

  // Start global updates
  updateTime();
  globalIntervalId = setInterval(updateTime, 1000);

  // Setup event listeners
  document
    .querySelector("#cities-select")
    .addEventListener("change", updateCity);
  document
    .querySelector("#return-button")
    .addEventListener("click", returnPage);
});
