import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { TasksContext } from "../contexts/TasksContext";
import TaskItem from "./TaskItem";

function TaskList(props) {
  const { isAuthenticated } = useContext(AuthContext);

  const { tasks, setTasks } = useContext(TasksContext);

  const onDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  if (!isAuthenticated) {
    return (
      <h2 className="text-red-500 text-4xl text-center">Войдите в систему</h2>
    );
  }

  if (tasks === undefined || tasks.length === 0) {
    return <h2 className="text-red-500">Задачи отсутствуют</h2>;
  }

  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
