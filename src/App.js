import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>TODO Application</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      <div className="task-list">
        {tasks.map((t, index) => (
          <div className="task-box" key={index}>
            <span
              onClick={() => toggleComplete(index)}
              className={t.completed ? "completed" : ""}
            >
              {t.text}
            </span>

            <button
              className="delete-btn"
              onClick={() => deleteTask(index)}
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;