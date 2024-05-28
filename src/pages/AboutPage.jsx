import { useParams } from "react-router-dom";

function AboutPage() {
  const { about } = useParams();
  console.log(about);
  return (
    <div>
      <h1>About page</h1>
      <p>this is so cool!</p>
    </div>
  );
}

export default AboutPage;
