import "./Utils.scss";
import { LanguageChangeButton } from "./components/LanguageChangeButton/LanguageChangeButton";
import { NotificationButton } from "./components/NotificationButton/NotificationButton";
import { ReportButton } from "./components/ReportButton/ReportButton";
import { ToggleThemeButton } from "./components/ToggleThemeButton/ToggleThemeButton";


export const Utils = () => {
   return (
      <div className="utils">
         <LanguageChangeButton />
         <NotificationButton />
         <ReportButton />
         <ToggleThemeButton />
      </div>
   );
};
