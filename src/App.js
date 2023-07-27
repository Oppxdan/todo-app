import { useState } from 'react';
import './App.css';
import NormalTask from './components/normalTask/normal-task';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [task, setTask] = useState("");

  const changeTask = (event) => {
    setTask(event.target.value);
  }

  const addTask = () => {
    if (task !== "") {
      const newList = [...toDoList, { id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1, taskName: task, isComplete: false, isEditing: false }]
      setToDoList(newList);
    }
  }

  const deleteTask = (id) => {
    const deletedList = toDoList.filter((task) => {
      if (task.id === id) {
        return false;
      } else {
        return true;
      }
    })
    setToDoList(deletedList);
  }

  const completeTask = (id) => {
    const completedTaskList = toDoList.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: true }
      } else {
        return task
      }
    });
    setToDoList(completedTaskList);
  }

  const editTask = (taskId, updatedTaskName) => {
    const updatedTasks = toDoList.map((task) =>
      task.id === taskId ? { ...task, taskName: updatedTaskName } : task
    );
    setToDoList(updatedTasks); // Update the toDoList state, not task state
  };


  return (
    <div className="App">
      <div className="TodoWrapper">
        <h1 className="heading">Let's Get Things Done!</h1>
        <section className="task-input">
          <input
            id="todo-input"
            className="todo-input"
            onChange={changeTask}
            value={task}
            placeholder="Enter your task here"
            aria-label="Task Input"
            aria-required="true"
          />
          <button
            className="todo-btn"
            onClick={addTask}
            aria-label="Add Task Button"
          >
            Add Task
          </button>
        </section>
        <section className="task-list">
          {toDoList.map((task) => (
            <NormalTask
              key={task.id}
              isComplete={task.isComplete}
              id={task.id}
              taskName={task.taskName}
              addTask={addTask}
              deleteTask={deleteTask}
              toDoList={toDoList}
              setToDoList={setToDoList}
              editTask={editTask}
              task={task}
              setTask={setTask}
              completeTask={completeTask}
              aria-label={`Task: ${task.taskName}, Status: ${task.isComplete ? 'Completed' : 'Not Completed'}`}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
