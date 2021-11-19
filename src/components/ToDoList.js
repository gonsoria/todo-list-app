import React from 'react';
import ToDo from './ToDo';

function ToDoList({ toDos, toDoDelete, toDoComplete, setEdit }) {
    return (
        <div>
            <h2>Tareas</h2>
            {
                toDos.map(todo => 
                <ToDo 
                    key={todo.id}
                    todo={todo}
                    toDoDelete={toDoDelete}
                    toDoComplete={toDoComplete}
                    setEdit={setEdit}
                />)
            }
            
        </div>
    )
}

export default ToDoList
