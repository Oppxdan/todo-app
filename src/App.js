import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import NormalTask from './components/normalTask/normal-task';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [task, setTask] = useState("");

  const changeTask = (event) => {
    setTask(event.target.value);
  }

  const addTask = () => {
    const newList = [...toDoList, {id: toDoList.length == 0 ? 1 : toDoList[toDoList.length - 1].id + 1, taskName: task, isComplete: false, isEditing: false}]

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

  const completeTask = (id) => {
    const completedTaskList = toDoList.map((task) => {
      if (task.id == id) {
        return {...task, isComplete: true}
      } else {
        return task
      }
    });

    setToDoList(completedTaskList);
  }

  return (
    <div className="App">
      <div className="TodoWrapper">
        <h1 className="heading">Let's Get Things Done!</h1>
        <div className="task-input">
          <input className="todo-input" onChange={changeTask} placeholder="What's the Task for Today?"/>
          <button className="todo-btn" onClick={addTask}>Add Task</button>
        </div>
        <div className="task-list">
          {toDoList.map((task) => {
            return (
              <NormalTask 
                isComplete={task.isComplete}
                id={task.id}
                taskName={task.taskName}
                addTask={addTask}
                deleteTask={deleteTask}
                toDoList={toDoList}
                setToDoList={setToDoList}
                task={task}
                setTask={setTask}
                completeTask={completeTask}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
