import { useState } from 'react'

import { ToDoList } from './Components/ToDoList'
import { NewToDo } from './Components/NewToDo'
import { Todo } from './types'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}])
  } 

  const handleDelete = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
    <div>
      <NewToDo onAddTodo={todoAddHandler} />
      <ToDoList items={todos} handleDelete={handleDelete}/>
    </div>
    </>
  )
}

export default App
