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
            <button
               onClick={() => {
                  i18n.changeLanguage("en");
                  setLanguage("en");
               }}
            >
               en
            </button>
            <button
               onClick={() => {
                  i18n.changeLanguage("ar");
                  setLanguage("ar");
               }}
            >
               ar
            </button>

            <div>
               <NavBar />
            </div>

            <div>
               <Routes>
                  <Route path="/Weather" element={<WeatherContainer />} />
               </Routes>
            </div>
         </div>
      </>
   );
}

export default App;
