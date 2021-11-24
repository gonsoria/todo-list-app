import React, { useState ,useEffect } from 'react'
import styles from '../styles/ToDoForm.module.css'

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
            setError('Title is empty')
            return;
        }
        if(description.trim() === ''){
            setError('Description is empty')
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

    const handleClear = (e) => {
        e.preventDefault()
        setFormValue(initialFormValue)
        setError(null)
        setEdit(null)
    }


    return ( 
        <div>            
            <h3 className={styles.formTitle}>{ toDoEdit ? 'Edit  toDo' : 'New toDo'}</h3>
            <div className={styles.form}>
                <input
                    type='text' 
                    placeholder='Title'
                    name='title'
                    value={title}
                    onChange={handleOnChange}
                    ></input>
                <textarea 
                    placeholder='Description'
                    name='description'
                    value={description}
                    onChange={handleOnChange}
                ></textarea>
                <div className={styles.formButton}>
                    <button onClick={handleSubmit}>
                        <i className="fas fa-plus"></i>
                    </button>  
                    <button onClick={handleClear}>
                        clear
                    </button>          
                </div>
            </div>
            {
                error ? (<div className={styles.error}>{error}</div>) : null 
            }
        </div>
    )
}

export default ToDoForm