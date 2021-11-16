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

    return (
        <div>
            <h1>Lista de tareas.</h1>
            <div>
                <ToDoList
                    toDos={toDos}
                />
            </div>
            <div>
                <ToDoForm />
            </div>
        </div>
    )
}

export default App
