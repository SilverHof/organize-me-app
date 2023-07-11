import "./LoginImageBox.scss";
import people from "../../../assets/images/login.svg";

export const LoginImageBox = () => {
   return (
      <section className="login-image-box">
         <img
            src={people}
            alt="people"
            className="login-image-box__image"
         />
      </section>
   );
};
