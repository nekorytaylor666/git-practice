import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ReactHookFormAddTaskForm from "./components/ReactHookFormAddTaskForm";
import TaskList from "./components/TaskList";
import TodoDetails from "./components/TodoPage";
import { TasksContext } from "./contexts/TasksContext";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { isDarkMode } = useTheme();
  console.log(window.location.pathname);
  return (
    <div
      className={`flex flex-col gap-8 items-center justify-center min-h-screen w-full ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Header />
      <div className="h-[600px] w-[500px]">
        <Routes>
          {/* http://localhost:5173/ */}
          <Route path="/" element={<TaskList />} />
          {/* http://localhost:5173/add */}
          <Route path="/add" element={<ReactHookFormAddTaskForm />} />
          {/* http://localhost:5173/todo/1 */}

          <Route path="/todo/:id" element={<TodoDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
