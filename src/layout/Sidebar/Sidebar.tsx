import { useState } from "react";
import "./Sidebar.scss";
import { Logo } from "./components/Logo/Logo";
import { Navigation } from "./components/Navigation/Navigation";

export const Sidebar = () => {
   const [isFullSidebar, setIsFullSidebar] = useState<boolean>(true);

   return (
      <aside className="sidebar">
         <Logo
            isFullSidebar={isFullSidebar}
            setIsFullSidebar={setIsFullSidebar}
         />
         <Navigation isFullSidebar={isFullSidebar} />
      </aside>
   );
};
