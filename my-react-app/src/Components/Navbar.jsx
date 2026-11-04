import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector((state) => state.cart.items);

  const count = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/">ReduxShop</Link>
      <Link to="/cart">🛒 Cart ({count})</Link>
    </nav>
  );
}

export default Navbar;