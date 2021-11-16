import React from 'react'

function ToDo({ todo, toDoDelete, toDoComplete,  }) {
    return (
        <div>
            <h3>{todo.title}</h3>
            <button
                onClick={() => toDoComplete(todo.id)}
            >Terminado</button>            
            <p>{todo.description}</p>
            <button>Editar</button>            
            <button
                onClick={() => toDoDelete(todo.id)}
            >Eliminar</button>
            <hr/>        
        </div>
    )
}

export default ToDo
