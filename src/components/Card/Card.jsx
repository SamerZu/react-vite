import "./Card.css";
import { userCard } from "../../data";

export default function Card() {
  return (
    <article className="card">
      <h2>{userCard.name}</h2>
      <p>{userCard.text}</p>
      <a>{userCard.email}</a>
    </article>
  );
}
