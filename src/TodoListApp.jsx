import { useState } from 'react'
import { TodoItem } from './TodoItem'
import "./style.css"

export function TodoListApp() {

  const [newTodoName, setNewTodoName] = useState("")
  const [todos, setTodos] = useState([])

  function toggleTodo(todoId, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id == todoId) return {...todo, completed }
        return todo
      })
    })
  }

  function deleteTodo(todoId) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !=todoId)
    })
  }

  function addNewTodo() {
    if(newTodoName === '') return

    setTodos(currentTodos => {
      return [...currentTodos, {name: newTodoName, completed: false, id: crypto.randomUUID()}]
    })
    setNewTodoName("")
  }

  return (
    <>
      <ul id="list">
        {
          todos.map(todo => {
            return (
              <TodoItem key={todo.id}  {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            )
          })
        }

      </ul>
      <div id="new-todo-form">
        {JSON.stringify(todos)}
        <label for="todo-input">New Todo</label>
        <input type="text" id="todo-input"  value={newTodoName} onChange={e=>setNewTodoName(e.target.value)}/>
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </>
  )
}
