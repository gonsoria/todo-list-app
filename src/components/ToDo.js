import React from 'react'

function ToDo({ todo, toDoDelete, toDoComplete, setEdit }) {
    return (
        <div>
            <h3>{todo.title}</h3>
            <button
                onClick={() => toDoComplete(todo.id)}
            >{
                todo.completed === false ? 'Terminado' : 'Terminar'
            }</button>            
            <p>{todo.description}</p>
            <button
                onClick={() => (setEdit(todo))}
            >Editar</button>            
            <button
                onClick={() => toDoDelete(todo.id)}
            >Eliminar</button>
        </div>
    )
}

export default ToDo
