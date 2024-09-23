import { useState } from 'react'
import { useFetch } from './useFetch'
import "./style.css"

const URLS = {
  USERS: "users.json",
  POSTS: "posts.json",
  COMMENTS: "comments.json",
}

export function UseFetchApp() {

  const [url, setUrl] = useState(URLS.USERS)
  console.log(url);

  const { data, isLoading, isError } = useFetch(url)

  console.log(isLoading, "islOadinf")
  console.log(data, "data")
  console.log(isError, "isError")

  return (
    <>
      <div>
        <label>
          <input type="radio"
            checked={url === URLS.USERS}
            onChange={() => setUrl(URLS.USERS)}
          />
          Users
        </label>
        <label>
          <input type="radio"
            checked={url === URLS.POSTS}
            onChange={() =>setUrl(URLS.POSTS)}
          />
          Posts
        </label>
        <label>
          <input type="radio"
            checked={url === URLS.COMMENTS}
            onChange={() => setUrl(URLS.COMMENTS)}
          />
          Comments
        </label>
      </div>


      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Error</h1>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}

    </>
  )
}
