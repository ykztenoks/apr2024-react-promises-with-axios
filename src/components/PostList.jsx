import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//posts state coming from App -> Homepage -> PostList
function PostList({ posts }) {
  //toggle state to toggle hide/show of posts
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log("SHOW STATE CHANGING, NOW IT'S -> ", show);
    //useEffect tracks/listens changes in show state and console logs it when it changes
  }, [show]);

  //conditional render
  //if posts and show states are true, show posts, otherwise, show p tag with Hiding the post text
  return show && posts ? (
    <div className="center postList">
      <button onClick={() => setShow(!show)}> Toggle hide/show</button>
      {posts.map((element) => (
        <div key={element.id} className="center postCard">
          <Link to={`/posts/${element.id}`}>
            <h1>{element.title}</h1>
          </Link>
          <p>{element.body}</p>
        </div>
      ))}
    </div>
  ) : (
    <div>
      {/* button that controls show state to show/hide post list */}
      <button onClick={() => setShow(!show)}> Toggle hide/show</button>
      <p>Hiding the posts</p>
    </div>
  );
}

export default PostList;
