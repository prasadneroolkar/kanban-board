import React, { useState, useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import useTheme from "../../hooks/useTheme.js";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-slate-100 space-x-2 dark:bg-[#20212c] mx-2 flex items-center justify-center p-2 rounded-lg">
      <LightModeIcon
        sx={{ color: theme === "dark" ? "#9095a79e" : "#828fa3" }}
      />

      <button
        className="bg-gray-200 dark:bg-theme relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300"
        role="switch"
        aria-checked={theme === "dark"}
        type="button"
        onClick={toggleTheme}
      >
        <span
          className={`${
            theme === "light" ? "translate-x-1" : "translate-x-6"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        ></span>
      </button>
      <DarkModeIcon
        sx={{ color: theme === "dark" ? "#9095a79e" : "#828fa3" }}
      />
    </div>
  );
};

export default ToggleTheme;
