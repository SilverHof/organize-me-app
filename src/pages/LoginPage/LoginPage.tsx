import "./LoginPage.scss";
import { LoginBox } from "./components/LoginBox";
import { LoginImageBox } from "./components/LoginImageBox";

export const LoginPage = () => {
   return (
      <main className="login-page">
         <LoginBox />
         <LoginImageBox />
      </main>
   )
};
