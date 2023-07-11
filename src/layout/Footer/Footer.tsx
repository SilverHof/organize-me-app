import "./Footer.scss";
import { Board } from "./components/Board/Board";
import { WorkspaceSettings } from "./components/WorkspaceSettings/WorkspaceSettings";

export const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__inner">
            <Board />
            <WorkspaceSettings />
         </div>
      </footer>
   );
};
