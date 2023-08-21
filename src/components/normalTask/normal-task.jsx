import React, { useState } from 'react';
import './task.css';

function NormalTask(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(props.taskName);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    props.editTask(props.id, editedTaskName);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTaskName(props.taskName);
  };

  const handleInputChange = (event) => {
    setEditedTaskName(event.target.value);
  };

  const labelEditInput = 'Edit task input';

  return (
    <div
      className="task-container"
      style={{ backgroundColor: props.isComplete ? "green" : "#8758ff" }}
      role="listitem"
    >
      {isEditing ? (
        <div class="editing-container">
          <input
            type="text"
            id={`editInput_${props.id}`}
            value={editedTaskName}
            onChange={handleInputChange}
            className="edit-task-input"
            aria-label={labelEditInput}
          />
          <button className="task-btn" onClick={handleSave}>Save</button>
          <button className="task-btn" onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <p className="task-name" key={props.id}>{editedTaskName}</p>
          <button
            className="task-btn"
            onClick={() => props.completeTask(props.id)}
            aria-label="Mark as complete"
          >
            ✅
          </button>
          <button
            className="task-btn"
            onClick={() => props.deleteTask(props.id)}
            aria-label="Delete task"
          >
            🗑️
          </button>
          <button className="task-btn" onClick={handleEdit} aria-label="Edit task">
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default NormalTask;
