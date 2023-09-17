const apiKey = "349593b95f2799ea239398b1c8520fad";

const weatherData = document.getElementById("weather-data");
async function getWeather() {
  let cityName = document.getElementById("city").value;
  axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    )
    .then((result) => {
      const jsonData = result.data;

      const name = jsonData.name;
      const weatherDescription = jsonData.weather[0].description;
      const weatherCountry = jsonData.sys.country;
      const weatherIcon = jsonData.weather[0].icon;
      const timestamp = jsonData.dt;
      const date = new Date(timestamp * 1000);

      const weatherTable = document.getElementById("weather-table");
      const newRow = document.createElement("tr");

     
      const nameCell = document.createElement("td");
      nameCell.textContent = name;
      newRow.appendChild(nameCell);

      const weatherDescriptionCell = document.createElement("td");
      weatherDescriptionCell.textContent = weatherDescription;
      newRow.appendChild(weatherDescriptionCell);

      const weatherIconCell = document.createElement("td");
      const weatherIconElement = document.createElement("img");
      weatherIconElement.src = `https://openweathermap.org/img/w/${weatherIcon}.png`;
      weatherIconCell.appendChild(weatherIconElement);
      newRow.appendChild(weatherIconCell);

      const countryCell = document.createElement("td");
      countryCell.textContent = weatherCountry;
      newRow.appendChild(countryCell);

      const timeCell = document.createElement("td");
      timeCell.textContent = date.toUTCString();
      newRow.appendChild(timeCell);

      newRow.id = name.replace(/ /g, "_");
      const existingRow=document.getElementById(newRow.id);
      if ( existingRow=== null)
        weatherTable.appendChild(newRow);
      //else as lr3nnan
      else {
        weatherTable.removeChild(existingRow);
        weatherTable.appendChild(newRow);
        // console.log(`Element with id ${newRow.id} already exists.`);
      }
      
    });
}
