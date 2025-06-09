function updateTime() {
  let parisElement = document.querySelector("#paris");
  let singaporeElement = document.querySelector("#singapore");
  let dubaiElement = document.querySelector("#dubai");
  let amsterdamElement = document.querySelector("#amsterdam");

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
}
updateTime();
