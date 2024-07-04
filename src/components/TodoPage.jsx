import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { TasksContext } from "../contexts/TasksContext";
import { ThemeContext } from "../contexts/ThemeContext";

function TodoDetails() {
  const { id } = useParams();
  const { tasks } = useContext(TasksContext);
  const { isDarkMode } = useContext(ThemeContext);

  const task = tasks.find((task) => task.id === Number.parseInt(id));

  if (!task) {
    return <div className="text-center text-xl mt-8">Задача не найдена</div>;
  }

  return (
    <div
      className={`max-w-2xl mx-auto mt-8 p-6 rounded-lg shadow-lg ${
        isDarkMode ? "bg-zinc-800 text-white" : "bg-white text-zinc-800"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6 pb-2 border-b">{task.taskName}</h1>
      <div className="space-y-4">
        <DetailItem label="Описание" value={task.description} />
        <DetailItem label="Приоритет" value={task.priority} />
        <DetailItem label="Срок" value={task.dueDate} />
      </div>
      <Link
        to="/"
        className="inline-block mt-6 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-200"
      >
        Вернуться к списку
      </Link>
    </div>
  );
}

function DetailItem({ label, value }) {
  return (
    <p className="flex items-start">
      <span className="font-semibold w-24 flex-shrink-0">{label}:</span>
      <span>{value}</span>
    </p>
  );
}

export default TodoDetails;
