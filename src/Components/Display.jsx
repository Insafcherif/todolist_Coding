import React from 'react'

const Display = ({ task, tasks, setTasks }) => {



    const handelDelete = () => {
        setTasks(tasks.filter((elt) => elt.id != task.id));
    };
    return (
        <fieldset>
            <legend>Display</legend>
            <h1 style={{ textDecoration: task.completed && 'line-through' }}> Task : {task.name} </h1>
            <input type="checkbox" checked={task.completed}  />
            <button onClick={handelDelete}>Delete</button>

        </fieldset>
    )
}

export default Display