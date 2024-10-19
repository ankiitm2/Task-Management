"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function TaskForm({ addTask, editTask, existingTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");

  useEffect(() => {
    if (existingTask) {
      setTitle(existingTask.title);
      setDescription(existingTask.description);
      setPriority(existingTask.priority || "medium");
    } else {
      setTitle("");
      setDescription("");
      setPriority("medium");
    }
  }, [existingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingTask) {
      editTask({ ...existingTask, title, description, priority });
    } else {
      addTask({
        id: Date.now(),
        title,
        description,
        priority,
        completed: false,
      });
    }
    setTitle("");
    setDescription("");
    setPriority("medium");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.flexBox}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="btn">
        {existingTask ? "Update" : "Add"}
      </button>
    </form>
  );
}
