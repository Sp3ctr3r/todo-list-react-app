import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  }

  const handleTaskClick = () => {
    if (task.trim() !== "") {
      setTasks(prevTasks => [...prevTasks, task]);
      setTask("");
      setShowModal(true);
    }
  }

  useEffect(() => {
    if (showModal) {
      alert("Task added.");

      setShowModal(false);
    }
  }, [showModal]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-6">
            <div className="mainBox">
              <div className="topSec">
                <div className="ball"></div>
                <div className="taskInput">
                  <input type="text" className="task" placeholder="Enter task" value={task} onChange={handleInputChange} />
                </div>
                <div className="addButton">
                  <button type="button" className="btn" onClick={handleTaskClick}>Add</button>
                </div>
              </div>

              <hr />

              <div className="taskList">
                <div className="tableBox">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th colSpan="3" scope="col">Tasks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tasks.map((task, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td colspan="3">{task}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;