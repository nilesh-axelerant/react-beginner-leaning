import React from "react"
import { TodoList } from "./TodoList"
import { UserNameClass } from "./UserNameClass";
import { TodoListItem } from "./TodoListItem";
import { TodoListItemClass } from "./TodoListItemClass";

function App() {
  // return React.createElement("h1", {id: "test-h1"}, "Hello world")
  // return "Hello world"
  // return <label style={{ background: "blue" }}>Hello</label>
  return (
    <div className="large" id="largeDiv">
      <label htmlFor="inputId">Number</label>
      <input type="number" defaultValue={3} id="inputId"></input>

      <h1>ToDo list</h1>
      <TodoList />

      <UserNameClass />

      <TodoListItem isCompleted={true}>Todo list item1</TodoListItem>
      <TodoListItem >Todo list item2</TodoListItem>

      <h1>ToDo list from class</h1>
      <TodoListItemClass isCompleted={true}>Todo list 1</TodoListItemClass>
      <TodoListItemClass>Todo list 1</TodoListItemClass>
    </div>
  )
}

export default App
