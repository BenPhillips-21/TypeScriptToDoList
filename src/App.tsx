import { ToDoList } from './Components/ToDoList'
import { NewToDo } from './Components/NewToDo'

function App() {
  const todos = [{id: '1', text: 'finish le course'}, {id: '2', text: 'raaaaaaa'}]
  return (
    <>
    <div>
      <NewToDo />
      <ToDoList items={todos}/>
    </div>
    </>
  )
}

export default App
