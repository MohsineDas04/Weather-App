import "./WeatherContainer.css";
import "./MakeResponsive.css";
import rainyIcon from "./assets/rainy.png";
import sunriseIcon from "./assets/sunrise.png";
import sunsetIcon from "./assets/sunset.png";
import cloudyIcon from "./assets/cloudy.png";
import sunnyIcon from "./assets/sunny.png";
import atmosphericIcon from "./assets/atmosphere.png";
import drizzleIcon from "./assets/drizzle.png";
import thunderstormIcon from "./assets/Thunderstorm.png";
import snowIcon from "./assets/snow.png";
import { useEffect, useState } from "react";
import LoaderCss from "./Loader";
// i18n
import { useTranslation } from "react-i18next";
import axios from "axios";
export default function WeatherContainer() {
   const [loading, setLoading] = useState(false);
   const [t] = useTranslation();
   const [status, setStatus] = useState();
   const [city, setCity] = useState("");
   const [country, setCountry] = useState("");
   const [weatherState, setWeatherState] = useState("Clear");
   const [temperature, setTemperature] = useState(32);
   const [sunrise, setSunrise] = useState("06:00");
   const [sunset, setSunset] = useState("18:00");
   const [error, setError] = useState(null);
   useEffect(() => {
      console.log("this is sunrise :", sunrise);
      console.log("this is sunset :", sunset);
   }, [sunrise, sunset]);
   function convertTimestamp(timestamp) {
      const date = new Date(timestamp * 1000);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return `${hours}:${minutes}`;
   }
   function handleSearch() {
      setLoading(true);
      setTimeout(() => {
         axios
            .post(
               `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=53b235e20ea7229e8355d3d9ac13959c&units=metric`
            )
            .then((res) => {
               setTemperature(res.data.main.temp);
               setSunrise(convertTimestamp(res.data.sys.sunrise));
               setSunset(convertTimestamp(res.data.sys.sunset));
               setStatus("success");
               setWeatherState(res.data.weather[0].main);
               // console.log("this is sunrise :", sunrise);
               // console.log("this is sunset :", res.data.sys.sunset);
               console.log(res.data.main.temp);
               setLoading(false);
            })
            .catch((err) => {
               setStatus("error");
               setError(err.response.data.message);
               console.log(err.response.data.message);
               setLoading(false);
            });
      }, 2500);
   }
   return (
      <div className="Container">
         <div className="SearchBar">
            <div className="InputsCont">
               <input
                  id="InpSearch"
                  type="text"
                  placeholder={t("description.placeholder1.val")}
                  style={{ padding: "0.5rem", margin: "auto" }}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
               />
               <input
                  id="InpSearch"
                  type="text"
                  placeholder={t("description.placeholder2.val")}
                  style={{ padding: "0.5rem", margin: "auto" }}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
               />
            </div>
            <div>
               <button onClick={handleSearch} disabled={!city}>
                  {t("description.button.val")}
               </button>
            </div>
         </div>
         <div className="Weather">
            {loading ? (
               <LoaderCss />
            ) : status == "success" ? (
               <>
                  <div className="WeatherHeat">
                     <h1>{t("description.weather.val")}</h1>
                     <img
                        id="ImgH"
                        src={
                           weatherState === "Rain"
                              ? rainyIcon
                              : weatherState === "Clouds"
                              ? cloudyIcon
                              : weatherState === "Clear"
                              ? sunnyIcon
                              : weatherState === "Atmosphere"
                              ? atmosphericIcon
                              : weatherState === "Drizzle"
                              ? drizzleIcon
                              : weatherState === "Thunderstorm"
                              ? thunderstormIcon
                              : snowIcon
                        }
                        alt=""
                        style={{ width: "200px", height: "200px" }}
                     />
                     <h2>{temperature}°C</h2>
                  </div>
                  <div
                     className="WeatherDetails"
                     style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                     }}
                  >
                     <img
                        src={sunriseIcon}
                        alt="SunriseIcon"
                        style={{ width: "60px", height: "60px" }}
                     />
                     <h3>
                        {t("description.sunrise.val")}
                        {sunrise}
                     </h3>
                     <img
                        src={sunsetIcon}
                        alt="SunsetIcon"
                        style={{ width: "60px", height: "60px" }}
                     />{" "}
                     <h3>
                        {t("description.sunset.val")}
                        {sunset}
                     </h3>
                  </div>
               </>
            ) : status == "error" ? (
               <h1>{error}</h1>
            ) : (
               <h1 id="TextInside" style={{ textAlign: "center" }}>
                  {t("description.Welcoming1.val")} <br />
                  <p style={{ color: " #F6E5CE", margin: "2px 0" }}>
                     {" "}
                     {t("description.Welcoming2.val")}{" "}
                  </p>
               </h1>
            )}
         </div>
      </div>
   );
}
