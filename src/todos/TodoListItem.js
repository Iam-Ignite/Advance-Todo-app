import React from "react";
import './todolistitem.css'

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {

   return (
      <div className="todo-item-container">
      <div className="status">
            { todo.isCompleted ? <span style={{color:'#12d812'}}>Completed</span> : <span style={{color:'#ff9a00'}}>Pending</span>}
      </div>
         <h3>{todo.text}</h3>
         <div className="buttons-container">
        
                  <button className="completed-button"  disabled={todo.isCompleted ? true : false}
                     onClick={() => onCompletedPressed(todo.text)}
                  >Mark As Completed</button>
            

            <button
               onClick={() => onRemovePressed(todo.text)}
               className="remove-button">Remove</button>
         </div>

      </div>

   );
}

export default TodoListItem;