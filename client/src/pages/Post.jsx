import { Link, useLoaderData } from 'react-router-dom';
import { getPost } from '../apis/posts';
import { getComments } from '../apis/comments';
import { getUser } from '../apis/users';

function Post() {
  const { post, comments, user } = useLoaderData()

  return (
    <>
      <h1 className="page-title">
        { post.title }
        <div className="title-btns">
          <Link className="btn btn-outline" to={`/posts/${post.id}/edit`}>Edit</Link>
        </div>
        </h1>
      <span className="page-subtitle">By:
        <Link to={`/users/${user.id}`}>{user.name}</Link>
      </span>
      <div>{ post.body }</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        { comments.map(comment => (
          <div key={comment.id} className="card">
            <div className="card-body">
              <div className="text-sm mb-1">{comment.email}</div>
              { comment.body }
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

async function loader({ request: { signal }, params } ) {

  const comments = getComments(params.postId, {signal})
  const post = await getPost(params.postId, {signal})
  const user = getUser(post.userId, {signal})

  return { comments: await comments, post, user: await user }
}

export const postRouter = {
  loader,
  element: <Post />,
}
