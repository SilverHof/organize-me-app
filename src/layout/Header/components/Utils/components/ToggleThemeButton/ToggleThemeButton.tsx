import React, { useState } from 'react';
import "./ToggleThemeButton.scss";
import toggleThemeIcon from "../../../../../../assets/icons/header-icons//toggleTheme.svg";

export const ToggleThemeButton = () => {

  const [theme, setTheme] = useState<string>("dark")

  return (
    <button className="toggle-theme-button">
      <img src={toggleThemeIcon} alt="" className="toggle-theme-button__image" />
    </button>
  )
}
