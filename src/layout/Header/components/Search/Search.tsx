import "./Search.scss";
import searchIcon from "../../../../assets/icons/header-icons/searchBlack.svg";
import { useState } from "react";

export const Search = () => {
   const [value, setValue] = useState<string>("");

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
   };

   return (
      <form
         action=""
         className="search"
      >
         <input
            type="text"
            className="search__input"
            placeholder="Search..."
            value={value}
            onChange={handleInputChange}
         />
         <img
            src={searchIcon}
            alt=""
            className="search__image"
         />
      </form>
   );
};
