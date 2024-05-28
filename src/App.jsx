import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PostDetails from "./pages/PostDetails";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import RandomCat from "./pages/RandomCat";
import CreatePost from "./pages/CreatePost";
function App() {
  const [posts, setPosts] = useState(null);

  async function getPosts() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

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
    <div className="center">
      <Navbar />
      <h1>React promises with Axios</h1>

      <Routes>
        <Route path="/" element={<Homepage posts={posts} />} />
        <Route path="/posts/:postId" element={<PostDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/random-cat" element={<RandomCat />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
