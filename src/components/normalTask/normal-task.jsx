import {useState} from 'react';
import './task.css'

function NormalTask(props) {
  
  return (
    <div className="task-container" style={{backgroundColor : props.isComplete ? "green" : "#8758ff"}}>
        <p className="task-name" key={props.id}>{props.taskName}</p>
        <button className="todo-btn" onClick={() => props.completeTask(props.id)}>Complete</button>
        <button className="todo-btn" onClick={() => props.deleteTask(props.id)}>Delete</button>
    </div>
  );
}

export default NormalTask;
