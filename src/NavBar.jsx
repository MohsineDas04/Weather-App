import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NavBar.css";
export default function NavBar() {
   const { t, i18n } = useTranslation();
   return (
      <div>
         <ul className="NavBar">
            <li className="listStyles">
               <Link id="News" to="https://weather.com/?Goto=Redirected" target="_blank">
                  {t("description.Navbar.val1")}
               </Link>
            </li>
            <li className="listStyles">
               <Link id="Weather" to="/Weather">
                  {t("description.Navbar.val2")}
               </Link>
            </li>
         </ul>
      </div>
   );
}
