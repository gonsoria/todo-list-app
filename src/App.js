import React ,{ useState, useEffect } from 'react'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'


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
        <div>
            <h1>Lista de tareas.</h1>
            <div>
                <ToDoList
                    toDos={toDos}
                    toDoDelete={toDoDelete}
                    toDoComplete={toDoComplete}
                    setEdit={setEdit}
                />
            </div>
            <div>
                <ToDoForm 
                    toDoAdd={toDoAdd}
                    toDoEdit={toDoEdit}
                    modifyToDo={modifyToDo}
                    setEdit={setEdit}
                />
            </div>
        </div>
    )
}

export default App
