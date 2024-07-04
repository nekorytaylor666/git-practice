import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { TasksContext } from "../contexts/TasksContext";
import { ThemeContext } from "../contexts/ThemeContext";

const taskSchema = z.object({
  taskName: z.string().min(3, { message: "Минимум 3 символа" }),
  description: z.string().min(3, { message: "Минимум 3 символа" }),
  priority: z.enum(["low", "medium", "high"]),
  dueDate: z.string(),
});

const ReactHookFormAddTaskForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taskName: "",
      description: "",
      priority: "low",
      dueDate: "",
    },
    resolver: zodResolver(taskSchema),
  });
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { tasks, setTasks } = useContext(TasksContext);

  const onAddTask = async (taskValue) => {
    const newTask = { ...taskValue, id: tasks.length + 1 };
    setTasks([...tasks, newTask]);
    navigate(`/todo/${newTask.id}`);
  };

  const onSubmit = (data) => {
    onAddTask(data);
  };

  const inputClass = `w-full rounded-lg px-4 py-2 ${
    isDarkMode ? "bg-zinc-800 text-white" : "bg-gray-200 text-black"
  }`;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 container max-w-sm mx-auto"
    >
      <input {...register("taskName")} className={inputClass} type="text" />
      {errors.taskName && (
        <p className="text-red-500">{errors.taskName.message}</p>
      )}
      <textarea
        {...register("description")}
        className={inputClass}
        type="text"
      />
      {errors.description && (
        <p className="text-red-500">{errors.description.message}</p>
      )}
      <select {...register("priority")} className={inputClass}>
        <option value="low">Низкий</option>
        <option value="medium">Средний</option>
        <option value="high">Высокий</option>
      </select>
      {errors.priority && (
        <p className="text-red-500">{errors.priority.message}</p>
      )}
      <input {...register("dueDate")} className={inputClass} type="date" />
      {errors.dueDate && (
        <p className="text-red-500">{errors.dueDate.message}</p>
      )}
      <button
        type="submit"
        className={`bg-orange-500 text-white rounded-lg py-2 px-4 font-semibold ${
          isDarkMode ? "bg-orange-600" : "bg-orange-500"
        }`}
      >
        Добавить задачу
      </button>
    </form>
  );
};

export default ReactHookFormAddTaskForm;
