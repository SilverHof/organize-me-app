import "./Account.scss";
import chevronBlackIcon from "../../../../assets/icons/header-icons/chevronBlack.svg";

export const Account = () => {
   return (
      <button className="account">
         <div className="account__image"></div>
         <span className="account__name">Vladimir</span>
         <img
            src={chevronBlackIcon}
            alt=""
            className="account__arrow-icon"
         />
      </button>
   );
};
