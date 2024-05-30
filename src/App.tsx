import { ToDoList } from './Components/ToDoList'

function App() {
  const todos = [{id: '1', text: 'finish le course'}]
  return (
    <>
    <div>
      <ToDoList items={todos}/>
    </div>
    </>
  )
}

export default App
