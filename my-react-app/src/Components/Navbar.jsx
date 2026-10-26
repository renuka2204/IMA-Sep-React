import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <style>
        {`
          .navbar {
            background: linear-gradient(135deg, #1f243a, #764ba2);
            color: white;
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .navbar h2 {
            margin: 0;
          }

          .navbar div {
            display: flex;
            gap: 10px;
          }

          .navbar a {
            color: white;
            text-decoration: none;
          }

          .navbar a:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <div className="navbar">
        <h2>My Website</h2>

        <div>
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/about">About</Link>
          {" | "}
          <Link to="/services">Services</Link>
          {" | "}
          <Link to="/products">Products</Link>
          {" | "}
          <Link to="/contact">Contact</Link>

        </div>
      </div>

    </>
  );
}

export default Navbar;