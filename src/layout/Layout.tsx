import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import { Sidebar } from "./Sidebar/Sidebar";

export const Layout = () => {
   return (
      <div className="wrapper">
         <Sidebar />
         <div className="layout">
            <Header />
            <main className="main">
               <Outlet />
            </main>
         </div>
      </div>
   );
};