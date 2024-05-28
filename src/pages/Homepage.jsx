import { Link } from "react-router-dom";
import PostList from "../components/PostList";
import { ColorRing } from "react-loader-spinner";
function Homepage({ posts }) {
  return (
    <div className="center">
      <h3>Posts list:</h3>
      {/* conditional render, if posts state has array of objects, show the PostList
      if not, shows loading spinner */}
      {posts ? (
        <PostList posts={posts} />
      ) : (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}
    </div>
  );
}

export default Homepage;
