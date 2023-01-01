import React from 'react'

const Display = ({ task, tasks, setTasks }) => {

    const handelDelete = () => {
        setTasks(tasks.filter((elt) => elt.id != task.id))
    }
    const doneTask = (id) => {
        tasks.map((elt) => {
            if (elt.id == id && elt.done) {
                return { ...elt, done: false };
            }
            if (elt.id == id && !elt.done) {
                return { ...elt, done: true };
            }
            else { return elt; }
        })
    }

    return (
        <fieldset>
            <legend>Display</legend>
            <h1 style={task.done ? { textDecoration: "line-through" } : { textDecoration: "none" }}> Task : {task.name} </h1>
            <input type="checkbox" onClick={()=> doneTask(task.id)} />
            <button onClick={handelDelete}>Delete</button>

        </fieldset>
    )
}

export default Display