import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PostDetails from "./pages/PostDetails";

function App() {
  const [posts, setPosts] = useState(null);

  async function getPosts() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  // getPosts();

  // axios
  //   .get("https://jsonplaceholder.typicode.com/posts")
  //   .then((response) =>

  //   console.log(response))
  //   .catch((err) => console.log(err));

  return (
    <div>
      <h1>React promises with Axios</h1>
      <Routes>
        <Route path="/" element={<Homepage posts={posts} />} />
        <Route path="/posts/:postId" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
