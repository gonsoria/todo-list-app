import React, { useState ,useEffect } from 'react'

const initialFormValue = {
    title:'',
    description:'',
}

function ToDoForm({ toDoAdd, toDoEdit, modifyToDo,setEdit}) {

    const [formValue, setFormValue] = useState(initialFormValue)
    const {title,description} = formValue;
    const [error, setError] = useState(null)  // estado de error para campos vacios

    useEffect(() => {
            // console.log('click en editar')
            toDoEdit && setFormValue(toDoEdit)
        }
        ,[toDoEdit])


    const handleOnChange = (e) => {
        const changedFormValue = {
            ...formValue,
            [e.target.name]:e.target.value
        }
        setFormValue(changedFormValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        if(title.trim() === ''){          //el .trim() elimina los espacios en blanco.
            setError('El campo de titulo esta vacio')
            return;
        }
        if(description.trim() === ''){
            setError('La descripcion esta vacia')
            return;
        }
        if(toDoEdit){
            modifyToDo(formValue)
        }
        else{
            setError(null)
            toDoAdd(formValue)
            setFormValue(initialFormValue)
        }
        setFormValue(initialFormValue)
        setEdit(null)
    }



    return ( 
        <div>
            {
                toDoEdit ? (<h2>Editar Tarea</h2>) : (<h2>Nueva Tarea</h2>) 
            }
            <form onSubmit={handleSubmit}>
                <input
                    type='text' 
                    placeholder='Titulo'
                    name='title'
                    value={title}
                    onChange={handleOnChange}
                    ></input>
                <textarea 
                    placeholder='Descripcion'
                    name='description'
                    value={description}
                    onChange={handleOnChange}
                ></textarea>
                <br/>
                <button>{
                        toDoEdit ? 'Actualizar' : 'Agregar' 
                    }
                </button>            
            </form>
            {
                error ? (<div>{error}</div>) : null 
            }
        </div>
    )
}

export default ToDoForm
