import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container flex flex-row justify-end gap-16">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/cart">
          Shopping Cart
        </Link>
      </div>
    </div>
  );
}
