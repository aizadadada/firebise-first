import React, { useContext, useState } from 'react';
import { mainContext } from '../contexts/MainContext';

const Add = () => {
    const { addTodo } = useContext(mainContext)
    const [todo, setTodo] = useState({
        id: Date.now(),
        title: "",

    })
    function handleChange(e) {
        setTodo({
            ...todo,
            title: e.target.value,
        })
    }

    function handleClick() {
        addTodo(todo)
        setTodo({
            id: Date.now(),
            title: ''
        })
    }
    return (
        <div>
            <div>
                <input type="text" value={todo.title} onChange={handleChange} />
                <button onClick={handleClick}>Add</button>
            </div>
        </div>
    );
};

export default Add;