import React from 'react';
import ToDo from './ToDo';

function ToDoList({ toDos }) {
    return (
        <div>
            <h2>Tareas</h2>
            {
                toDos.map(todo => 
                <ToDo 
                    key={todo.id}
                    todo={todo}
                />)
            }
            
        </div>
    )
}

export default ToDoList
