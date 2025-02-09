
import { useState } from "react"

export default function Form() {

    const [newTodo, setNewTodo] = useState('');

    const inputChangeHandler = (e) => {
        setNewTodo(e.target.value);
        console.log(newTodo);
    }

    return (
        <div id="input-container">
            <input value={newTodo} onChange={inputChangeHandler} id="new-input" type="text" placeholder="Enter new todo" />
            <button id="new-button">Add</button>
        </div>
    )
}