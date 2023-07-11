import "./Header.scss";
import { Account } from "./components/Account/Account";
import { Search } from "./components/Search/Search";
import { Utils } from "./components/Utils/Utils";

export const Header = () => {
   return (
      <header className="header">
         <div className="header__inner">
            <Search />
            <div className="header__empty-block"></div>
            <Utils />
            <div className="header__decor"></div>
            <Account />
         </div>
      </header>
   );
};
