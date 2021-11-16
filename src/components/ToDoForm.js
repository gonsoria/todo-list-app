import React from 'react'

function ToDoForm() {
    return (
        <div>
            <h2>Nueva Tarea</h2>
            <form>
                <input type='text' placeholder='Titulo'></input>
                <textarea placeholder='Descripcion'></textarea>
                <button>Agregar</button>            
            </form>
        </div>
    )
}

export default ToDoForm
