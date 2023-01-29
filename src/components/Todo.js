import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v1 as uuidv1 } from "uuid";
import './style.css'
function Todo() {

    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    const [completed, setCompleted] = useState([]);

    const addTodo = () => {
        const updatedTodo = [{ todoText: inputValue, id: uuidv1() }, ...todos];
        setTodos(updatedTodo);
        setInputValue("");
    };

    const deleteTodo = (id) => {
        const filteredTodos = todos.filter((i) => i.id !== id);
        setTodos(filteredTodos);
    };

    const checkTodo = (id) => {
        if (completed.includes(id)) {
            setCompleted(completed.filter((c) => c !== id));
        } else {
            setCompleted([...completed, id]);
        }
    };

    // console.log(completed);
    const history = useNavigate()
    function logOut() {
        localStorage.clear();
        history("/Signin");
    }

    return (
        <div className="todo__main">
            <h1>TODO APPLICATION</h1>
            <section className="input__container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                />
                <button onClick={addTodo}>ADD TASK</button>
            </section>
            <section className="list__container">
                {todos.map((v) => {
                    // console.log(v);
                    return (
                        <div
                            className={`list__item ${completed.includes(v.id) ? "checked__list__item" : ""
                                }`}
                            key={v.id}
                        >
                            <p>{v.todoText}</p>
                            <section>
                                <button
                                    className="cm_btn danger"
                                    onClick={() => {
                                        deleteTodo(v.id);
                                    }}
                                >
                                    DELETE
                                </button>
                                <button
                                    className="cm_btn check"
                                    onClick={() => {
                                        checkTodo(v.id);
                                    }}
                                >
                                    DONE
                                </button>
                            </section>
                        </div>
                    );
                })}
            </section>
            <div className="log_out">
                <button className="log_btn" onClick={logOut}> Log Out</button>
            </div>
        </div>



    )
}

export default Todo;
