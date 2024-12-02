import { useLoaderData } from "react-router-dom";
import { getTodos } from "../apis/todos";
import { TodoItem } from "../components/TodoItem";

function TodoList() {
  const todos = useLoaderData()

  return (
    <>
    <h1 className="page-title">Todos</h1>
      <ul>
        { todos.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  )
}

function loader({request: {signal}}) {
  return getTodos({signal})
}

export const todoListRouter = {
  loader,
  element: <TodoList />,
}
