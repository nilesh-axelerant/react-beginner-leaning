import { createBrowserRouter, Navigate, useRouteError } from "react-router-dom"
import { postListRouter } from "./pages/PostList"
import { userListRouter } from "./pages/UserList"
import { todoListRouter } from "./pages/TodoList"
import { RootLayout } from "./layouts/RootLayout"
import { postRouter } from "./pages/Post"
import { userRouter } from "./pages/User"
import { addPostRouter } from "./pages/AddPost"
import { editPostRouter } from "./pages/EditPost"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { errorElement: <ErrorPage />, children: [
        { index: true, element: <Navigate to="/posts" /> },
        {
          path: "posts",
          children: [
            { index: true, ...postListRouter },
            { path: ":postId", children: [
              { index: true, ...postRouter },
              { path: "edit", ...editPostRouter }
            ]},
            { path: "new", ...addPostRouter },
          ]
        },
        {
          path: "users",
          children: [
            { index: true, ...userListRouter },
            { path: ":userId", ...userRouter },
          ]
        },
        {
          path: "todos",
          children: [
            { index: true, ...todoListRouter }
          ]
        },
        { path: "*", element: <h1>404 Page not found</h1> }
      ]},
    ]
  }
])

function ErrorPage() {
  const error = useRouteError()
  return (
    <>
      <h1>Error - Something went wrong</h1>
      { import.meta.env.MODE != "production" && (
        <>
          <pre>{ error.message }</pre>
          <pre>{ error.stack }</pre>
        </>
      )}
    </>
  )
}
