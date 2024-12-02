import { Form, redirect, useActionData, useLoaderData } from "react-router-dom"
import { getUsers } from "../apis/users"
import { FormGroup } from "../components/FormGroup"
import { createPost, getPost, updatePost } from "../apis/posts"
import { PostForm, postFormValidator } from "../components/PostForm"

function EditPostForm() {

  const { post, users } = useLoaderData()
  const errors = useActionData()

  return (
    <>
      <h1 className="page-title">New Post</h1>
      <PostForm users={users} defaultValues={post} errors={errors}/>
    </>
  )
}

async function action( { request, params: { postId } } ) {
  const formData = await request.formData()
  const id = formData.get("id")
  const title = formData.get("title")
  const body = formData.get("body")
  const userId = formData.get("userId")

  const errors = postFormValidator({title, body, userId})
  console.log(errors, "errors")
  if (Object.keys(errors).length > 0) {
    return errors
  }

  const post = await updatePost(
    postId,
    {id, title, body, userId},
    {signal: request.signal}
  )

  return redirect(`/posts/${post.id}`)
}

async function loader({ request: { signal }, params } ) {

  const post = getPost(params.postId, { signal })
  const users = getUsers({ signal })

  return { post: await post, users: await users }
}

export const editPostRouter = {
  loader,
  action,
  element: <EditPostForm />
}
