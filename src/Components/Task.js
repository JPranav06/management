import React, { useState } from 'react';
import './Task.css';

function Task() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || description.trim() === '') {
      return;
    }

    const newTask = {
      title: title,
      description: description,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
  };

  const handleUpdateStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Task Management</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          required
        ></textarea>

        <button type="submit">Add Task</button>
      </form>

      <h2>Task List</h2>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li className={`task-item ${task.completed ? 'completed' : ''}`} key={index}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.completed ? 'Completed' : 'Incomplete'}</p>
            {!task.completed && (
              <button onClick={() => handleUpdateStatus(index)}>Mark as Completed</button>
            )}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
