import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home / Posts List</Link>
      <Link to="/create-post">Create a post</Link>
      <Link to="/about">About</Link>
      <Link to="/random-cat">Take a look at a random cat</Link>
    </nav>
  );
}

export default Navbar;
