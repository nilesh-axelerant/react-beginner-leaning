import { useContext, useEffect, useReducer, useRef, useState } from 'react'
import { TodoItem } from './TodoItem'
import { TodoContext } from './TodoApp'

export function TodoAddForm() {

  const {addNewTodo} = useContext(TodoContext)

  const nameRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    if (nameRef.current.value == null) return

    addNewTodo(nameRef.current.value)

    nameRef.current.value = ""
  }

  return (
    <>
      <form onSubmit={handleSubmit} id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          ref={nameRef}
        />
        <button>Add Todo</button>
      </form>
    </>
  )
}
