import "./LoginBox.scss";
import { useState } from "react";
import googleIcon from "../../../assets/icons/google.svg";
import appleIcon from "../../../assets/icons/apple.svg";
import microsoftIcon from "../../../assets/icons/microsoft.svg";
import { Link } from "react-router-dom";
import axios from "axios";

export const LoginBox = () => {
   const [email, setEmail] = useState<string>("");
   const [password, setPassword] = useState<string>("");

   const handleEmailInputChange = (
      event: React.ChangeEvent<HTMLInputElement>
   ): void => {
      event.preventDefault();
      setEmail(event.target.value);
   };

   const handlePasswordInputChange = (
      event: React.ChangeEvent<HTMLInputElement>
   ): void => {
      event.preventDefault();
      setPassword(event.target.value);
   };

   const handleContinueButtonClick = (
      event: React.FormEvent<HTMLButtonElement>
   ) => {
      event.preventDefault();
      axios.get(`http://localhost:3000/users`)
         .then((response) => {
         console.log(response.request.response.name);
      });
   };

   return (
      <section className="login-box">
         <div className="login-box__title">
            <h2 className="login-box__title-left">Task</h2>
            <h2 className="login-box__title-right">er</h2>
         </div>
         <div className="login-box__body">
            <span className="login-box__subtitle">Login</span>
            <form
               action=""
               className="login-box__form"
            >
               <div className="login-box__inputs">
                  <input
                     type="text"
                     className="login-box__input-email"
                     placeholder="Enter the email"
                     onChange={handleEmailInputChange}
                     value={email}
                  />
                  <input
                     type="text"
                     className="login-box__input-password"
                     placeholder="Enter the password"
                     onChange={handlePasswordInputChange}
                     value={password}
                  />
               </div>
               <button
                  className="login-box__button-continue"
                  onClick={handleContinueButtonClick}
               >
                  Continue
               </button>
               <span className="login-box__else">Or</span>
               <div className="login-box__another-enter-options">
                  <button className="login-box__another-button">
                     <img
                        src={googleIcon}
                        alt=""
                        className="login-box__another-button-image"
                     />
                     Enter with Google
                  </button>
                  <button className="login-box__another-button">
                     <img
                        src={appleIcon}
                        alt=""
                        className="login-box__another-button-image"
                     />
                     Enter with Apple
                  </button>
                  <button className="login-box__another-button">
                     <img
                        src={microsoftIcon}
                        alt=""
                        className="login-box__another-button-image"
                     />
                     Enter with Microsoft
                  </button>
               </div>
            </form>
            <Link
               to={"/signup"}
               className="login-box__register-link"
            >
               Register an account
            </Link>
         </div>
      </section>
   );
};
