import React from 'react';
import ToDo from './ToDo';

function ToDoList({ toDos, toDoDelete, toDoComplete, setEdit }) {
    return (
        <div>
            <h2>Tareas</h2>
            {
                toDos.length === 0 ? ( <h4>No hay tareas, agregar una.</h4> ) 
                :(
                toDos.map(todo => 
                <ToDo 
                    key={todo.id}
                    todo={todo}
                    toDoDelete={toDoDelete}
                    toDoComplete={toDoComplete}
                    setEdit={setEdit}
                />))
            }
            <hr/>
            
        </div>
    )
}

export default ToDoList
