import { useContext, useState, useRef } from 'react'
import { TodoContext } from './TodoApp'

export function TodoItem({id, name, completed}) {

  const {updateTodoName, toggleTodo, deleteTodo} = useContext(TodoContext)
  const [isEditing, setIsEditing] = useState(false)
  const nameRef = useRef()


  function handleSubmit(e) {
    e.preventDefault()

    if (nameRef.current.value === '') return

    updateTodoName(id, nameRef.current.value)

    setIsEditing(false)
  }

  return (
    <li className="list-item">

      {isEditing ? (
        <>
        <form onSubmit={handleSubmit}>
          <label className="list-item-label">
            <input autoFocus type="text" defaultValue={name} ref={nameRef} />
          </label>
          <button data-button-save>Save</button>
          </form>
        </>
      ) : (
        <>
          <label className="list-item-label">
            <input
              type="checkbox"
              checked={completed}
              onChange={e => toggleTodo(id, e.target.checked)}
              data-list-item-check
            />
            <span data-list-item-text>{name}</span>
          </label>
          <button data-button-edit onClick={() => setIsEditing(true)}>Edit</button>
          <button data-button-delete onClick={() => deleteTodo(id)}>Delete</button>
        </>
      )}


    </li>
  )
}
