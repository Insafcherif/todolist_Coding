import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import Display from "./Components/Display";

function App() {
  const [tasks, setTasks] = useState([
    { id: 25, name: "Get python black belt", done : false }
   
  ]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <Form addTask={addTask} />
      {tasks.map((task) => (
        <Display key={task.id} task={task} tasks={tasks}
        setTasks={setTasks} />
      ))}
    </div>
  );
}

export default App;
