import "./Logo.scss";
import logoIcon from "../../../../assets/icons/sidebar-icons/logo.svg";
import { LogoProps } from "./Logo.props";

export const Logo = ({ isFullSidebar, setIsFullSidebar }: LogoProps) => {
   const handleClick = () => {
      setIsFullSidebar(!isFullSidebar);
   };

   return (
      <div className="logo">
         <button
            className="logo__button"
            onClick={handleClick}
         >
            <img
               src={logoIcon}
               alt="menu"
               className="logo__button-image"
            />
         </button>
         <div className={isFullSidebar ? `logo__title` : `logo__title_short`}>
            <span className="logo__title-left">organize</span>
            <span className="logo__title-right">me</span>
         </div>
      </div>
   );
};
