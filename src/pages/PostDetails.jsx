import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
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
      console.log("ERROR FROM FETCHING A POST ❗❗❗->", error);
    }
  }

  useEffect(() => {
    getSinglePost();
  }, [postId]);

  return (
    <div className="center postdetails">
      <Link to="/">
        <button>Back</button>
      </Link>
      PostDetails
      {post ? (
        <div className="center gap">
          <h1>Title: {post.title}</h1>
          <p>Body: {post.body}</p>
          <p>UserId: {post.userId}</p>
          <p>Post id: {post.id}</p>
        </div>
      ) : (
        <p>
          {" "}
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </p>
      )}
    </div>
  );
}

export default PostDetails;
