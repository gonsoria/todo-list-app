import React from 'react';
import ToDo from './ToDo';
import styles from '../styles/ToDoList.module.css'

function ToDoList({ toDos, toDoDelete, toDoComplete, setEdit }) {
    return (
        <div className={styles.todoList}>
            {
                toDos.length === 0 ? ( <h4>
                    There are no tasks, add one.</h4> ) 
                :(
                toDos.map(todo =>
                <div  key={todo.id} className={styles.todoCard}>
                    <ToDo                        
                        todo={todo}
                        toDoDelete={toDoDelete}
                        toDoComplete={toDoComplete}
                        setEdit={setEdit}
                    />
                    <hr/>
                </div> ))
            }
        </div>
    )
}

export default ToDoList
