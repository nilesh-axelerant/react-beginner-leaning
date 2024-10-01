import { useEffect, useReducer, useRef, useState, createContext } from 'react'
import { TodoAddForm } from './TodoAddForm'
import { TodoList } from './TodoList'
import { TodoFilterForm } from './TodoFilterForm'

const LOCAL_STORAGE_KEY = 'TODO'

const ACTIONS = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  TOGGLE: "TOGGLE"
}

function reducer(todos, {type, payload}) {
  console.log(type, "type")
  console.log(todos, "todos")
  console.log(payload, "payload")
  switch (type) {
    case ACTIONS.ADD:
      return [
        ...todos,
        { name: payload.name, completed: false, id: crypto.randomUUID() },
      ]
    case ACTIONS.DELETE:
      return todos.filter(todo => todo.id != payload.id)
    case ACTIONS.UPDATE:
      // return todos
      return todos.map(todo => {
        if (todo.id == payload.id) return {...todo, name: payload.name }
        return todo
      })
    case ACTIONS.TOGGLE:
      return todos.map(todo => {
        if (todo.id == payload.id) return {...todo, completed: payload.completed }
        return todo
      })
    default:
      console.log("default")

  }


}

export const TodoContext = createContext()

export function TodoApp() {

  const [filterName, setFilterName] = useState("")
  const [hideCompletedFilter, setHideCompletedFilter] = useState(false)
  const [todos, dispatch] = useReducer(reducer, [], intValue => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (value === null) return intValue

    return JSON.parse(value)
  })

  const filteredTodos = todos.filter((todo) => {
    if (hideCompletedFilter && todo.completed) return false
    return todo.name.includes(filterName)
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(todoId, completed) {
    dispatch({ type:ACTIONS.TOGGLE, payload: {id: todoId, completed: completed} })
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE, payload: {id: todoId} })
  }

  function updateTodoName(todoId, name) {
    dispatch({ type: ACTIONS.UPDATE, payload: {id: todoId, name: name} })
  }

  function addNewTodo(name) {
    dispatch({ type: ACTIONS.ADD, payload: { name: name } })
  }

  return (
    <TodoContext.Provider
    value={{
      todos: filteredTodos,
      addNewTodo,
      updateTodoName,
      deleteTodo,
      toggleTodo,
    }}>

      {JSON.stringify(todos)}

      <TodoFilterForm name={filterName} setName={setFilterName} hideCompleted={hideCompletedFilter} setHideCompleted={setHideCompletedFilter} />
      <TodoList />
      <TodoAddForm />
    </TodoContext.Provider>
  )
}
