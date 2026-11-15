// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// function Navbar() {
//   const items = useSelector((state) => state.cart.items);

//   const count = items.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   return (
//     <nav className="navbar">
//       <Link to="/">ReduxShop</Link>
//       <Link to="/cart">🛒 Cart ({count})</Link>
//     </nav>
//   );
// }

// export default Navbar;




// ussememo diffrenet language and products
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ language, setLanguage }) {
  const text = {
    en: {
      products: "Products",
      summary: "Summary",
      button: "मराठी",
    },
    mr: {
      products: "उत्पादने",
      summary: "सारांश",
      button: "English",
    },
  };

  const t = text[language];

  return (
    <nav className="navbar">
      <h2>Price Calculator</h2>

      <div className="nav-links">
        <Link to="/">{t.products}</Link>
        <Link to="/summary">{t.summary}</Link>

        <button
          className="language-btn"
          onClick={() =>
            setLanguage(language === "en" ? "mr" : "en")
          }
        >
          {t.button}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
