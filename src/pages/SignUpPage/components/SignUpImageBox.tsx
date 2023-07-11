import "./SignUpImageBox.scss";
import people from "../../../assets/images/signup.svg";

export const SignUpImageBox = () => {
   return (
      <section className="signup-image-box">
         <img
            src={people}
            alt="people"
            className="signup-image-box__image"
         />
      </section>
   );
};
