import React from 'react'

function ToDo({ todo }) {
    return (
        <div>
            <h3>{todo.title}</h3>
            <button>Terminado</button>            
            <p>{todo.description}</p>
            <button>Editar</button>            
            <button>Eliminar</button>
            <hr/>        
        </div>
    )
}

export default ToDo
