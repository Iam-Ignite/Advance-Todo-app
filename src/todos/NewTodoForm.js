import React, { useState } from "react";
import './newtodoform.css'
import { connect } from "react-redux";
import { createTodo } from "../action";



const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('')

    return (
        <div className='new-todo-form'>
            <input className='new-todo-input' type="text"
                value={inputValue}
                placeholder="Type your new todo"
                onChange={e => setInputValue(e.target.value)}
            />
            <button
                onClick={() => {
                    const isDuplicateText =
                        todos.some(todos => todos.text === inputValue);
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }

                }}
                className="new-todo-button">
                Create Todo</button>
        </div>
    );
}
const mapStateToProps = state => ({
    todos: state.todos,

});
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))

});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);