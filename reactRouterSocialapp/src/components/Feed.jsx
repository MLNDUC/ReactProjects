import React from 'react'

export const Feed = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}
