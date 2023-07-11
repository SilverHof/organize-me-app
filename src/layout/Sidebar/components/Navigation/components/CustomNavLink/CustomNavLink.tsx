import "./CustomNavLink.scss";
import { NavLink } from "react-router-dom";
import { CustomNavLinkProps } from "./CustomNavLink.props";

export const CustomNavLink = ({
   to,
   text,
   icon,
   isFullSidebar,
}: CustomNavLinkProps) => {
   return (
      <NavLink
         to={to}
         className={({ isActive }) =>
            isActive ? `custom-nav-link_active` : `custom-nav-link`
         }
      >
         {({ isActive }) => (
            <>
               <img
                  src={icon}
                  alt=""
                  className="custom-nav-link__icon"
               />
               {/* <span
                  className={
                     isActive
                        ? "custom-nav-link__text_active"
                        : "custom-nav-link__text"
                  }
               >
                  {text}
               </span> */}
               <span
                  className={
                     isFullSidebar && isActive
                        ? "custom-nav-link__text"
                        : isFullSidebar === false
                        ? "custom-nav-link__text_none"
                        : "custom-nav-link__text"
                  }
               >
                  {text}
               </span>
               <div
                  className={
                     isFullSidebar && isActive
                        ? "custom-nav-link__decor_active"
                        : isFullSidebar === false
                        ? "custom-nav-link__decor_none"
                        : "custom-nav-link__decor"
                  }
               ></div>
            </>
         )}
      </NavLink>
   );
};
