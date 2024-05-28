import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function PostList({ posts }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log("SHOW STATE CHANGING, NOW IT'S -> ", show);
  }, [show]);

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
      <button onClick={() => setShow(!show)}> Toggle hide/show</button>
      <p>Hiding the posts</p>
    </div>
  );
}

export default PostList;
