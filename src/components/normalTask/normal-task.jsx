import {useState} from 'react';
import './task.css'

function NormalTask(props) {
  
  return (
    <div className="task-container" style={{backgroundColor : props.isComplete ? "green" : "#8758ff"}}>
        <p className="task-name" key={props.id}>{props.taskName}</p>
        <button className="task-btn" onClick={() => props.completeTask(props.id)}>✅</button>
        <button className="task-btn" onClick={() => props.deleteTask(props.id)}>🗑️</button>
    </div>
  );
}

export default NormalTask;
