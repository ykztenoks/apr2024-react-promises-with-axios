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
  //inital state of posts, set to null for conditional render
  //will hold posts array after request is made
  const [posts, setPosts] = useState(null);

  //ASYNCHRONOUS FUNCTION to fetch posts
  async function getPosts() {
    //try block executes the request
    try {
      //store the response of the request in a variable
      //make the request using axios.httpVerb(url for request)
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      //set the post state to the response.data of the request (array of objects)
      setPosts(response.data);
      //catch block executes if there is any error with the request, and console logs the error
    } catch (error) {
      console.log(error);
    }
  }
  //useEffect with empty [] dependency array
  //only runs after initial render
  useEffect(() => {
    //after initial render, call getPosts() async function to fetch/get posts
    getPosts();
  }, []);

  // example request using then/catch instead of async/await
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
