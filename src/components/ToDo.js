import React from 'react'

function ToDo({ todo, toDoDelete, toDoComplete, setEdit }) {
    return (
        <div>
            <h3>{todo.title}</h3>
            <button
                onClick={() => toDoComplete(todo.id)}
            >Terminado</button>            
            <p>{todo.description}</p>
            <button
                onClick={() => (setEdit(todo))}
            >Editar</button>            
            <button
                onClick={() => toDoDelete(todo.id)}
            >Eliminar</button>
            <hr/>        
        </div>
    )
}

export default ToDo
