import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="container flex flex-row justify-end gap-16">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/cart">
          Shop
        </Link>

        {location.pathname === "/cart" && (
          <img className="width-32" src="cart.svg" alt="Cart" />
        )}
      </div>
    </div>
  );
}
