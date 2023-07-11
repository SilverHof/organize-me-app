import "./NotificationButton.scss";
import notificationIcon from "../../../../../../assets/icons/header-icons/notificationBlack.svg";

export const NotificationButton = () => {
   return (
      <button className="notification-button">
         <img
            src={notificationIcon}
            alt=""
            className="notification-button__image"
         />
         <div className="notification-button__count">21</div>
      </button>
   );
};
