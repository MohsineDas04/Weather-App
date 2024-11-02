import "./Loader.css";
import { useTranslation } from "react-i18next";
export default function LoaderCss() {
   const { t } = useTranslation();

   return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "25px" }}>
         <span className="loader"></span>
         <h1>{t("description.holdingon.val")}</h1>
      </div>
   );
}
