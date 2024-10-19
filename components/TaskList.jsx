"use client";
import React from "react";
import styles from "../styles/Home.module.css";

export default function TaskList({
  tasks,
  editTask,
  deleteTask,
  toggleTaskCompletion,
}) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "red";
      case "medium":
        return "yellow";
      case "low":
        return "green";
      default:
        return "gray";
    }
  };

  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className={styles.overflow}>
      {/* Incomplete Tasks */}
      {incompleteTasks.length > 0 && (
        <>
          <ul className={styles.taskList}>
            {incompleteTasks.map((task) => {
              const checkboxId = `cbx-${task.id}`;
              return (
                <li
                  key={task.id}
                  style={{ borderColor: getPriorityColor(task.priority) }}
                >
                  <div className={styles.flexBox2}>
                    <div className="">
                      <div className={styles.flexBox}>
                        <div className="input-container">
                          <input
                            type="checkbox"
                            checked={task.completed}
                            id={checkboxId}
                            onChange={() => toggleTaskCompletion(task.id)}
                          />
                          <label htmlFor={checkboxId} className="check">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>
                          </label>
                        </div>
                        <h3
                          className="m-0 text-capitalize"
                          style={{
                            textDecoration: task.completed
                              ? "line-through"
                              : "none",
                            textDecorationStyle: task.completed
                              ? "dashed"
                              : "solid",
                          }}
                        >
                          {task.title}
                        </h3>
                      </div>
                      <p className="m-0 pl-3 pt-1" style={{ color: "#959595" }}>
                        {task.description}
                      </p>
                      <p className="m-0 pl-3 pt-1">Priority: {task.priority}</p>
                    </div>
                    <div className={styles.flexBox}>
                      <button className="btn" onClick={() => editTask(task)}>
                        Edit
                      </button>
                      <button
                        className="btn delete"
                        onClick={() => deleteTask(task.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}

      {/* Completed Tasks */}
      {completedTasks.length > 0 && (
        <>
          <h4 className="m-0">Completed Tasks</h4>
          <ul className={styles.taskList}>
            {completedTasks.map((task) => {
              const checkboxId = `cbx-${task.id}`;
              return (
                <li
                  key={task.id}
                  style={{ borderColor: getPriorityColor(task.priority) }}
                >
                  <div className={styles.flexBox2}>
                    <div className="">
                      <div className={styles.flexBox}>
                        <div className="input-container">
                          <input
                            type="checkbox"
                            checked={task.completed}
                            id={checkboxId}
                            onChange={() => toggleTaskCompletion(task.id)}
                          />
                          <label htmlFor={checkboxId} className="check">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>
                          </label>
                        </div>
                        <h3
                          className="m-0 text-capitalize"
                          style={{
                            textDecoration: task.completed
                              ? "line-through"
                              : "none",
                            textDecorationStyle: task.completed
                              ? "dashed"
                              : "solid",
                          }}
                        >
                          {task.title}
                        </h3>
                      </div>
                      <p className="m-0 pl-3 pt-1" style={{ color: "#959595" }}>
                        {task.description}
                      </p>
                      <p className="m-0 pl-3 pt-1">Priority: {task.priority}</p>
                    </div>
                    <div className={styles.flexBox}>
                      <button className="btn" onClick={() => editTask(task)}>
                        Edit
                      </button>
                      <button
                        className="btn delete"
                        onClick={() => deleteTask(task.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
