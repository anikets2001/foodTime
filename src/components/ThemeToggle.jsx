import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;

    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    if (theme !== "system") {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.removeItem("theme");
    }
  }, [theme]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="px-2">
        {theme === "light" ? <FaSun /> : <FaMoon />}
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
          <button
            onClick={() => setTheme("light")}
            className="flex items-center p-2 w-full hover:bg-gray-200"
          >
            <FaSun className="mr-2" /> Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            className="flex items-center p-2 w-full hover:bg-gray-200"
          >
            <FaMoon className="mr-2" /> Dark
          </button>
          <button
            onClick={() => setTheme("system")}
            className="flex items-center p-2 w-full hover:bg-gray-20"
          >
            System
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
