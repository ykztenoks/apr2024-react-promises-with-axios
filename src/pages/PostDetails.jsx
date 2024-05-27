import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function PostDetails() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  async function getSinglePost() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSinglePost();
  }, []);
  return (
    <div>
      PostDetails
      {post ? (
        <div>
          <h1>Title: {post.title}</h1>
          <p>Body: {post.body}</p>
          <p>UserId: {post.userId}</p>
          <p>Post id: {post.id}</p>
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
}

export default PostDetails;
