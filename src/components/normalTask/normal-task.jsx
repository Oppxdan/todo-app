import {useState} from 'react';
import './task.css'

function NormalTask(props) {
  
  return (
    <div className="task-container" style={{backgroundColor : props.isComplete ? "green" : "white"}}>
        <p key={props.id}>{props.taskName}</p>
        <button onClick={() => props.completeTask(props.id)}>Complete</button>
        <button onClick={() => props.deleteTask(props.id)}>Delete</button>
    </div>
  );
}

export default NormalTask;
