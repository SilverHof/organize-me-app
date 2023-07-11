import "./Logo.scss";
import cube from "../../../../assets/icons/cube.svg"

export const Logo = () => {
   return (
      <div className="logo">
         <div className="logo__image">
            <img
               src={cube}
               alt="menu"
               className="logo__image-box"
            />
         </div>
         <div className="logo__title">
            <span className="logo__title-left">
               Task
            </span>
            <span className="logo__title-right">
               er
            </span>
         </div>
      </div>
   );
};
