import React ,{ useState } from 'react'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'
import styles from './App.module.css'


// const initialToDos =[
//     {
//         title:'',
//         description: '',
//         completed: false,
//         id:''
//     }
// ]

function App() {
    const [toDos, setToDos] = useState([])
    const [toDoEdit,setEdit] = useState(null)
    
    const toDoDelete = (toDoId) => {
        const changedToDos = toDos.filter( todo => toDoId !== todo.id )
        setToDos(changedToDos)
    }

    const toDoComplete = (toDosId) => {
        const changedToDos = toDos.map(todo => toDosId === todo.id ? {...todo, completed: !todo.completed} : todo) 

        setToDos(changedToDos)
    }


    const toDoAdd = (todo) => {
        const newToDo = {
            ...todo,
            completed: false,
            id:Date.now()
        }
        const changedToDos = [
            newToDo,
            ...toDos
        ]        
        setToDos(changedToDos)
    }

    const modifyToDo = (toDoEdit) => {
        const changedToDo = toDos.map(todo => todo.id === toDoEdit.id ? toDoEdit : todo)
        setToDos(changedToDo)
    }


    return (
        <div className={styles.app}>
            <div className={styles.titleContainer}>
                <h1>toDo list</h1>
            </div>
            <div className={styles.appContainer}>
                <div className={styles.form}>
                    <ToDoForm 
                        toDos={toDos}
                        toDoAdd={toDoAdd}
                        toDoEdit={toDoEdit}
                        modifyToDo={modifyToDo}
                        setEdit={setEdit}
                    />
                </div>
                <div className={styles.todoList}>
                    <ToDoList
                        toDos={toDos}
                        toDoDelete={toDoDelete}
                        toDoComplete={toDoComplete}
                        setEdit={setEdit}
                    />
                </div>                 
            </div>
        </div>
    )
}

export default App
