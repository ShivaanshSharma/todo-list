
import { useState } from "react"

export default function Form(props) {

    const [newTodo, setNewTodo] = useState('');
    const [addDesc, setAddDesc] = useState(false);
    const [newDesc, setNewDesc] = useState('');

    const inputChangeHandler = (e) => {
        setNewTodo(e.target.value);
    }

    const addClickHandler = () => {
        setAddDesc(true);
    }

    const descChangeHandler = (e) => {
        setNewDesc(e.target.value);
    }

    const addNewTodoHandler = () => {
        setAddDesc(false);
        const newTodoData = {
            title: newTodo,
            Desc: newDesc,
            id: Math.random()
        }
        props.submitHandler(newTodoData);
    }

    return (
        <>
        <div id="input-container">
            <input value={newTodo} onChange={inputChangeHandler} id="new-input" type="text" placeholder="Enter new todo" />
            <button id="new-button" onClick={addClickHandler}>Add</button>
        </div>
        {addDesc ? 
        <>
        <textarea onChange={descChangeHandler} id="add-new-input" placeholder="Enter a description for the todo"/> 
        <button id="add-new-button" onClick={addNewTodoHandler}>Add Todo</button>
        </>
        : null}
        </>
    )
}