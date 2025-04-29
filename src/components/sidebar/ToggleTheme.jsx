import React, { useState, useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("Theme");
    console.log("Theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const onhandleTheme = () => {
    const root = document.documentElement;
    console.log("root", root);
    root.classList.toggle("dark");
    const newTheme = root.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("Theme", newTheme);
    setIsDark(newTheme === "dark");
  };
  return (
    <div>
      <LightModeIcon />
      <button
        className="bg-white dark:bg-theme relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300"
        role="switch"
        aria-checked={isDark}
        type="button"
        onClick={onhandleTheme}
      >
        <span
          className={`${
            isDark ? "translate-x-1" : "translate-x-6"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        ></span>
      </button>
      <DarkModeIcon />
    </div>
  );
};

export default ToggleTheme;
