import React ,{ useState } from 'react'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'


const initialToDos =[
    {
        title:'Tarea 1',
        description: 'Descripcion tarea 1',
        completed: false,
        id: 1
    },
    {
        title:'Tarea 2',
        description: 'Descripcion tarea 2',
        completed: false,
        id: 2
    }
]

function App() {
    const [toDos, setToDos] = useState(initialToDos)

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

 
    return (
        <div>
            <h1>Lista de tareas.</h1>
            <div>
                <ToDoList
                    toDos={toDos}
                    toDoDelete={toDoDelete}
                    toDoComplete={toDoComplete}
                />
            </div>
            <div>
                <ToDoForm 
                    toDoAdd={toDoAdd}
                />
            </div>
        </div>
    )
}

export default App
