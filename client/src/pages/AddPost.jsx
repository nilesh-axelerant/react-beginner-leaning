import { Form, redirect, useActionData, useLoaderData } from "react-router-dom"
import { getUsers } from "../apis/users"
import { FormGroup } from "../components/FormGroup"
import { createPost } from "../apis/posts"
import { PostForm, postFormValidator } from "../components/PostForm"

function AddPostForm() {

  const users = useLoaderData()
  const errors = useActionData()

  return (
    <>
      <h1 className="page-title">New Post</h1>
      <PostForm users={users} errors={errors} />
    </>
  )
}

async function action( { request } ) {
  const formData = await request.formData()
  const title = formData.get("title")
  const body = formData.get("body")
  const userId = formData.get("userId")

  const errors = postFormValidator({title, body, userId})
  if (Object.keys(errors).length > 0) {
    return errors
  }

  const post = await createPost({title, body, userId}, {signal: request.signal})

  return redirect(`/posts/${post.id}`)
}

function loader() {
  return getUsers()
}

export const addPostRouter = {
  loader,
  action,
  element: <AddPostForm />
}
