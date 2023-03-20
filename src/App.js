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

    setToDoList(newList);
  }

  const deleteTask = (id) => {
    const deletedList = toDoList.filter((task) => {
      if (task.id == id) {
        return false;
      } else {
        return true;
      }
    })

    setToDoList(deletedList);
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
              <p key={task.id}>{task.taskName}</p>
              <button>Complete</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
