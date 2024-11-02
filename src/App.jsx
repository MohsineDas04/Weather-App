import "./App.css";
import { json, Route, Routes } from "react-router-dom";
import WeatherContainer from "./WeatherContainer";
import NavBar from "./NavBar";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
function App() {
   const { t, i18n } = useTranslation(); // This gives you access to the translation function
   const [language, setLanguage] = useState("en");
   const [dir, setDir] = useState();
   useEffect(() => {
      setDir(language == "en" ? "ltr" : "rtl");
   }, [language]);
   return (
      <>
         <div className="App" style={{ direction: dir }}>
            {language == "ar" ? (
               <button
                  onClick={() => {
                     setTimeout(() => {
                        i18n.changeLanguage("en");
                     }, 100);
                     setLanguage("en");
                  }}
                  style={{
                     background: "none",
                     outline: "none",
                     color: "black",
                     border: "none",
                     fontSize: "larger",
                  }}
               >
                  الانجليزية
               </button>
            ) : (
               ""
            )}
            {language == "en" ? (
               <button
                  onClick={() => {
                     setTimeout(() => {
                        i18n.changeLanguage("ar");
                     }, 100);

                     setLanguage("ar");
                  }}
                  style={{
                     background: "none",
                     outline: "none",
                     color: "black",
                     border: "none",
                     fontSize: "larger",
                  }}
               >
                  Arabic
               </button>
            ) : (
               ""
            )}

            <WeatherContainer />

            <div></div>
         </div>
      </>
   );
}

export default App;
