import "./SignUpBox.scss";
import googleIcon from "../../../assets/icons/google.svg";
import appleIcon from "../../../assets/icons/apple.svg";
import microsoftIcon from "../../../assets/icons/microsoft.svg";
import { Link } from "react-router-dom";

export const SignUpBox = () => {
   return (
      <section className="signup-box">
         <div className="signup-box__title">
            <h2 className="signup-box__title-left">Task</h2>
            <h2 className="signup-box__title-right">er</h2>
         </div>
         <div className="signup-box__body">
            <span className="signup-box__subtitle">Sign Up</span>
            <form
               action=""
               className="signup-box__form"
            >
               <div className="signup-box__inputs">
                  <input
                     type="text"
                     className="signup-box__input-email"
                     placeholder="Enter the email"
                  />
                  <input
                     type="text"
                     className="signup-box__input-password"
                     placeholder="Enter the password"
                  />
                  <input
                     type="text"
                     className="signup-box__input-repeat-password"
                     placeholder="Repeat the password"
                  />
               </div>
               <button className="signup-box__button-continue">Continue</button>
               <span className="signup-box__else">
                  Or
               </span>
               <div className="signup-box__another-enter-options">
                  <button className="signup-box__another-button">
                     <img
                        src={googleIcon}
                        alt=""
                        className="signup-box__another-button-image"
                     />
                     Enter with Google
                  </button>
                  <button className="signup-box__another-button">
                     <img
                        src={appleIcon}
                        alt=""
                        className="signup-box__another-button-image"
                     />
                     Enter with Apple
                  </button>
                  <button className="signup-box__another-button">
                     <img
                        src={microsoftIcon}
                        alt=""
                        className="signup-box__another-button-image"
                     />
                     Enter with Microsoft
                  </button>
               </div>
            </form>
            <Link to={"/login"} className="signup-box__login-link">
               Already have an account? Login
            </Link>
         </div>
      </section>
   );
};
