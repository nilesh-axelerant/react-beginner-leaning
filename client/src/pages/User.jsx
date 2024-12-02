import { Link, useLoaderData } from 'react-router-dom';
import { getUser } from '../apis/users';
import { getPosts } from '../apis/posts';
import { getTodos } from '../apis/todos';
import { TodoItem } from '../components/TodoItem';
import { PostCard } from '../components/PostCard';

function User() {
  const { user, posts, todos } = useLoaderData()

  return (
    <>
      <h1 className="page-title">{ user.name }</h1>
      <div className="page-subtitle">{ user.email }</div>
      <div><b>Company:</b> { user.company.name }</div>
      <div><b>Website:</b> { user.website }</div>
      <div><b>Address:</b>
        { user.address.street } { user.address.suite }, { user.address.city }, { user.address.zipcode }
      </div>
      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        { posts.map( post => (
          <PostCard key={posts.id} {...post} />
        ))}
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        { todos.map( todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  )
}

async function loader({ request: { signal }, params: {userId} } ) {

  const posts = getPosts({ signal, params: { userId } })
  const todos = getTodos({ signal, params: { userId } })
  const user = getUser(userId, { signal })

  return { user: await user, posts: await posts, todos: await todos }
}

export const userRouter = {
  loader,
  element: <User />,
}
