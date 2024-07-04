import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext, useTheme } from "../contexts/ThemeContext";

function TaskItem(props) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`flex items-center justify-between p-4 mb-2 rounded-lg ${
        isDarkMode ? "bg-zinc-800 text-white" : "bg-white text-zinc-800"
      } shadow-md transition-all duration-300 hover:shadow-lg`}
    >
      <div className="flex-grow">
        <h2 className="font-mono text-lg font-semibold mb-1">
          <Link to={`/todo/${props.task.id}`} className="hover:underline">
            Задача {props.task.taskName}
          </Link>
        </h2>
        <p className="text-sm mb-1">{props.task.description}</p>
        <div className="flex items-center text-xs">
          <span
            className={`mr-2 px-2 py-1 rounded ${
              isDarkMode ? "bg-zinc-700" : "bg-zinc-200"
            }`}
          >
            {props.task.priority}
          </span>
          <span
            className={`px-2 py-1 rounded ${
              isDarkMode ? "bg-zinc-700" : "bg-zinc-200"
            }`}
          >
            {props.task.dueDate}
          </span>
        </div>
      </div>
      <button
        onClick={() => props.onDeleteTask(props.task.id)}
        type="button"
        className="ml-4 text-orange-500 hover:text-orange-600 transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default TaskItem;
