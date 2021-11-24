import React , { useState }from 'react'
import styles from '../styles/ToDo.module.css'
 
function ToDo({ todo, toDoDelete, toDoComplete, setEdit }) {

    const [deleteValidation, setdeleteValidation] = useState(false)

    const handleValidation = () => {
        setdeleteValidation(true)
    }
    
    

    return (
        <div>
            <div className={styles.todoContainer}>
                <h4>{todo.title}</h4>
                <div className={styles.todoButtons}>
                    <button className={`${todo.completed ? styles.completedButton : styles.nonCompleteButton}`}
                        onClick={() => toDoComplete(todo.id)}
                    >{
                        todo.completed ? 'completed' : 'complete'
                    }</button>            
                    <button className={styles.editButton}
                        onClick={() => (setEdit(todo))}
                        ><i className="fas fa-edit"></i></button>            
                    <button className={styles.deleteButton}
                        // onClick={() => toDoDelete(todo.id)}
                        onClick={handleValidation}
                        ><i className="fas fa-trash-alt"></i></button>
                </div>
            </div>
            <p className={styles.description}>{todo.description}</p>
            {
                deleteValidation ? (
                    <div className={styles.deleteMessage}>
                        <h4> Are you sure you want to remove '{`${todo.title}`}' ?</h4>
                        <button className={styles.deleteOk} onClick={() => toDoDelete(todo.id)}><i className="far fa-check-circle"></i></button>
                        <button className={styles.noDelete} onClick={() => setdeleteValidation(false)}><i className="far fa-times-circle"></i></button>
                    </div>
                ) : null
            }
        </div>
    )
}

export default ToDo
