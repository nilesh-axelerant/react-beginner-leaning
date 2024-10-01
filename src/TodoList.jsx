import { useEffect, useContext } from 'react'
import {TodoItem} from './TodoItem'
import { TodoContext } from './TodoApp'

export function TodoList() {

  const {todos} = useContext(TodoContext)
  return (
    <ul id="list">
      {
        todos.map(todo => {
          return (
            <TodoItem key={todo.id}  {...todo} />
          )
        })
      }
    </ul>
  )
}
