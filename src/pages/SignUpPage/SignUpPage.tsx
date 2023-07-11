import "./SignUpPage.scss";
import { SignUpBox } from "./components/SignUpBox";
import { SignUpImageBox } from "./components/SignUpImageBox";

export const SignUpPage = () => {
   return (
      <main className="signup-page">
         <SignUpImageBox />
         <SignUpBox />
      </main>
   )
};
