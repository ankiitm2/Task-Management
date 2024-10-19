"use client";

import { useState } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import styles from "../styles/Home.module.css";

export default function Page() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => setTasks([...tasks, task]);
  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null); // Clear the editing task after editing
  };
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const toggleTaskCompletion = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  return (
    <div className={styles.form}>
      <h1>Add a note</h1>
      <TaskForm
        addTask={addTask}
        editTask={editTask}
        existingTask={editingTask}
      />
      {tasks.length === 0 ? (
        <p>No tasks available. Please add a new task.</p>
      ) : (
        <TaskList
          tasks={tasks}
          editTask={(task) => setEditingTask(task)}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      )}
    </div>
  );
}
