import React, { useEffect, useState } from 'react';
import { postAPI } from '../services/PostService';
import { IPost } from '../models/IPost';
import PostItem from './PostItem';

const PostContainer = () => {
  const [limit, setLimit] = useState(11);
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(limit);
  const [createPost, {}] = postAPI.useCreatePostMutation()
  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [deletePost, {}] = postAPI.useDeletePostMutation()

  useEffect(() => {
    // setTimeout(() => {
    //     setLimit(3)
    // }, 2000)
  }, []);

  const handleCreate = async () => {
    const title = prompt()
    await createPost({title, body: title} as IPost)
  }

  const handleRemove = (post: IPost) => {
    deletePost(post)
  }

  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>Add new post</button>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Something went wrong... </h1>}
        {posts && posts.map(post =>
          <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>,
        )}
       </div>
    </div>
  );
};

export default PostContainer;