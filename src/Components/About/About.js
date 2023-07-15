import { useNavigate } from "react-router-dom";

export default function About() {
  const history = useNavigate();

  const buttonHandler = () => {
    history("/");
  };
  return (
    <section>
      <h1>About</h1>
      <p>This is the About component</p>
      <button onClick={buttonHandler}>Home</button>
    </section>
  );
}
