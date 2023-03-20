import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [task, setTask] = useState("");

  return (
    <div className="App">
      <div className="task-input">
        <input />
        <button>Add Task</button>
      </div>
      <div className="task-list">
        
      </div>
    </div>
  );
}

export default App;
