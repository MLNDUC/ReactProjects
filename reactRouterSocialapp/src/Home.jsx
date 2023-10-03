import { Feed } from "./Feed"

export const Home = ({ posts, fetchError, isLoading }) => {
  return (
    <main className="Home">
      {/* {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>
          No posts to display.
        </p>
      )} */}

      {/* use custom hooks to display loading& error status and posts */}
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && <p className="statusMsg" style={{ color: "red" }}>{fetchError}</p>}
      {!isLoading && !fetchError && (posts.length ? <Feed posts={posts} /> : <p className="statusMsg">No posts to display.</p>)}
    </main>
  )
}
