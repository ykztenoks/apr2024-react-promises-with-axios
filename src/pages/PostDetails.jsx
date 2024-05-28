import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";

function PostDetails() {
  const [post, setPost] = useState(null);
  //captures postId in the URL parameters
  //postId word matches what was defined in App.jsx route that renders PostDetails
  const { postId } = useParams();

  //asynchronous function to fetch/get a single post by its id
  async function getSinglePost() {
    //async function requires try/catch block
    //try deals with response and sets state if succesful
    try {
      //store response in variable
      //AWAIT for request to be fullfilled
      //axios.get(url + /posts + postId)
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      //set post state to object coming from request
      //accessible through response.data
      setPost(response.data);
      //catch block catches error if there's something wrong with request
    } catch (error) {
      console.log("ERROR FROM FETCHING A POST ❗❗❗->", error);
    }
  }

  useEffect(() => {
    getSinglePost();
    //whenever postId (comes from URLparams) changes, fetches a new post (with corresponding id)
  }, [postId]);

  return (
    <div className="center postdetails">
      <Link to="/">
        <button>Back</button>
      </Link>
      PostDetails
      {/* conditional render, if post is already fetched, render its info, otherwise, loading spinner */}
      {post ? (
        <div className="center gap">
          <h1>Title: {post.title}</h1>
          <p>Body: {post.body}</p>
          <p>UserId: {post.userId}</p>
          <p>Post id: {post.id}</p>
        </div>
      ) : (
        <p>
          {/* loading spinner component from react-loader-spinner npm package */}
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
