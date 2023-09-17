import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import { fileURLToPath } from "url";
import path from "path";
import request from "request-promise";


const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));



app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




//ניסיתי לעשות חיבור של דאטה בייס ו בוא נגיד ש חצי הצלחתי

// // Set up Mongoose
// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("Connected to Mongoose"));

// var citySchema = new mongoose.Schema({
//   name: String,
// });

// var cityModel = mongoose.model("City", citySchema);

// //var lsv= new cityModel({name:'Las Vegas'});
// // var mjd= new cityModel({name:'Majdal Shams'});
// //var tor= new cityModel({name:'Toronto'});

// //lsv.save();
// // mjd.save();
// //tor.save();

// async function getWeather(cities) {
//   var weather_data = [];

//   for (var city_obj of cities) {
//     var city = city_obj.name;
//     var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//     try {
//       var response_body = await request(url);
//       var weather_json = JSON.parse(response_body);
//       var weather = {
//         city: city,
//         temperature: Math.round(weather_json.main.temp),
//         description: weather_json.weather[0].description,
//         icon: weather_json.weather[0].icon,
//       };

//       weather_data.push(weather);
//     } catch (error) {
//       console.error(
//         `Error fetching weather data for ${city}: ${error.message}`
//       );

//     }
//   }
//   return weather_data;
// }

// var city = "Majdal Shams";
// const apiKey = "349593b95f2799ea239398b1c8520fad";
// var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
// app.get("/", async function (req, res) {
//   try {
//     const cities = await cityModel.find({});
//     const results = await getWeather(cities);

//     const weather_data = { weather_data: results };
//     console.log(weather_data);
//     res.render("index.ejs", weather_data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "An error occurred" });
//   }
// });

// app.post("/", function (req, res) {
//   var newCity = new cityModel({ name: req.body.city_name });
//   newCity.save();

//   res.redirect("/");
// });




// cityModel.find({},function(err,cities){
//   console.log(cities);
// });
//request(url, function (error, response, body) {
// weather_json = JSON.parse(body);
//console.log(weather_json);

//});
// const WeatherData = mongoose.model("WeatherData", {
//   name: String,
//   weatherDescription: String,
//   weatherIcon: String,
//   weatherCountry: String,
//   timestamp: Number,
// });

// Serve static files

// Body parsing middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Route to get weather data from OpenWeatherMap API and store in the database
// app.post("/get-weather", async (req, res) => {
//   try {
//     const apiKey = "349593b95f2799ea239398b1c8520fad";
//     const cityName = req.body.city;

//     const response = await axios.get(
//       `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
//     );
//     const jsonData = response.data;

//     const newWeatherData = new WeatherData({
//       name: jsonData.name,
//       weatherDescription: jsonData.weather[0].description,
//       weatherIcon: jsonData.weather[0].icon,
//       weatherCountry: jsonData.sys.country,
//       timestamp: jsonData.dt,
//     });

//     await newWeatherData.save();

//     res.status(200).send("Weather data saved successfully.");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error while getting weather data.");
//   }
// });

// app.get("/weather-data", async (req, res) => {
//   try {
//     const weatherData = await WeatherData.find().sort("-timestamp").limit(10);
//     res.json(weatherData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error while retrieving weather data.");
//   }
// });

