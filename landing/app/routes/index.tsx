import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Link to="/app">dashboard</Link>
      <a href="https://pawelpyc.pl/app">dashboard</a>
    </div>
  );
}
