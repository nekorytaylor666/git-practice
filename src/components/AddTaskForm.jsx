import React from "react";

// СОСТОЯНИЕ ФОРМЫ!!!
function AddTaskForm(props) {
  const [inputValue, setInputValue] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");
  const [inputError, setInputError] = React.useState("");
  const [descriptionError, setDescriptionError] = React.useState("");
  const [priorityError, setPriorityError] = React.useState("");
  const [dueDateError, setDueDateError] = React.useState("");

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onPriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const onDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    console.log("Отправка формы", {
      inputValue,
      description,
      priority,
      dueDate,
    });
    if (!inputValue) {
      setInputError("Введите название задачи");
    }
    if (!description) {
      setDescriptionError("Введите описание задачи");
    }
    if (!priority) {
      setPriorityError("Выберите приоритет задачи");
    }
    if (!dueDate) {
      setDueDateError("Введите дату задачи");
    }
    if (inputError || descriptionError || priorityError || dueDateError) {
      return;
    }
    event.preventDefault();
    props.onAddTask(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col  gap-4 container">
      <input
        onChange={onInputChange}
        value={inputValue}
        className="bg-zinc-800 w-full rounded-lg px-4 py-2 text-white"
        type="text"
      />
      {inputError && <p className="text-red-500">{inputError}</p>}
      <textarea
        onChange={onDescriptionChange}
        value={description}
        className="bg-zinc-800 w-full rounded-lg px-4 py-2 text-white"
        type="text"
      />
      {descriptionError && <p className="text-red-500">{descriptionError}</p>}
      <select
        onChange={onPriorityChange}
        value={priority}
        className="bg-zinc-800 w-full rounded-lg px-4 py-2 text-white"
      >
        <option value="low">Низкий</option>
        <option value="medium">Средний</option>
        <option value="high">Высокий</option>
      </select>
      {priorityError && <p className="text-red-500">{priorityError}</p>}
      <input
        onChange={onDueDateChange}
        value={dueDate}
        className="bg-zinc-800 w-full rounded-lg px-4 py-2 text-white"
        type="date"
      />
      {dueDateError && <p className="text-red-500">{dueDateError}</p>}
      <button
        type="submit"
        className="bg-orange-500 text-white rounded-lg py-2 px-4 font-semibold"
      >
        Добавить задачу
      </button>
    </form>
  );
}

export default AddTaskForm;
