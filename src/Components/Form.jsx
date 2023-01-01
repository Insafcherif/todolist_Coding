import React, { useState } from 'react'

const Form = ({ addTask }) => {
    const [task, setTask] = useState({id: 1, name: " " ,  completed : false});
    const handleChange = (e) => {
        setTask({ id: Math.floor(Math.random() * 10000), name: e.target.value });
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(task);
        setTask({ ...task, name: "" });
    };

    return (
        <fieldset>
            <legend>Add Task</legend>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={task.name} />
                <button variant="primary" >Add Task</button>
            </form>
        </fieldset>
    )
}

export default Form