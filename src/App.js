import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [task, setTask] = useState("");

  const changeTask = (event) => {
    setTask(event.target.value);
  }

  const addTask = () => {
    const newList = [...toDoList, {id: toDoList.length == 0 ? 1 : toDoList[toDoList.length - 1].id + 1, taskName: task, isComplete: false}]

    setToDoList()
  }

  return (
    <div className="App">
      <div className="task-input">
        <input onChange={changeTask} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {toDoList.map((task) => {
          return (
            <div>
              <p></p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
