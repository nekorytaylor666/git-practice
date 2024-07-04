import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  return (
    <header className={`p-4 ${isDarkMode ? "bg-black" : "bg-white"} w-full`}>
      <div className="container mx-auto flex flex-col gap-4 items-center justify-between">
        <h1
          className={`text-4xl font-mono  ${
            isDarkMode ? "text-orange-400" : "text-orange-600"
          }`}
        >
          Ежедневник
        </h1>
        <nav>
          <div className="flex gap-8 mb-4">
            <a href="/">Home тэг a</a>
            <a href="/add">Add Task тэг a</a>
            <Link to="/">Home тэг Link</Link>
            <Link to="/add">Add Task тэг Link</Link>
          </div>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition-colors duration-200 ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "text-orange-600 hover:bg-orange-100"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition-colors duration-200 ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "text-orange-600 hover:bg-orange-100"
              }`
            }
          >
            Add Task
          </NavLink>
        </nav>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              isDarkMode
                ? "bg-orange-400 text-gray-800 hover:bg-orange-300"
                : "bg-orange-600 text-white hover:bg-orange-700"
            }`}
          >
            {isDarkMode ? "Светлая тема" : "Темная тема"}
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              isDarkMode
                ? "bg-gray-600 text-white hover:bg-gray-500"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setIsAuthenticated(!isAuthenticated)}
          >
            {isAuthenticated ? "Выйти" : "Войти"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
