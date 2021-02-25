import Navigation from "./components/Navigation/Navigation";

export default function About({ username }) {
  return (
    <>
      <h1>About</h1>
      <p>{username}</p>
      <Navigation />
    </>
  );
}
