import {Counter} from "./counter";

const LIGHTHOUSES = ["Cap Fréhel", "Fastnet", "Hook Head", "Peggy's Point"];

export default function Home() {
  return (
    <>
      <h1>Lighthouse log</h1>
      <ul>{LIGHTHOUSES.map((name) => <li key={name}>{name}</li>)}</ul>
      <Counter />
    </>
  );
}
