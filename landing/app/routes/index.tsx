import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <ul>
        <Link to="app" className="button">
          app
        </Link>
        <div>
          <a href="https://pawelpyc.pl/app" className="button">
            a app
          </a>
        </div>
      </ul>
    </div>
  );
}
