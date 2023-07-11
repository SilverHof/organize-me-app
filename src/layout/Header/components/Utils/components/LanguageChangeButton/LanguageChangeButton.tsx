import "./LanguageChangeButton.scss";
import languageIcon from "../../../../../../assets/icons/header-icons/globeBlack.svg";

export const LanguageChangeButton = () => {
   return (
      <button className="language-change-button">
         <img
            src={languageIcon}
            alt=""
            className="language-change-button__image"
         />
         EN
      </button>
   );
};
