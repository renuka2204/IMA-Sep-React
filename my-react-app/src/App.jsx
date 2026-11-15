// import { Routes, Route } from "react-router-dom";

// import Navbar from "./Components/Navbar";
// import Products from "./Components/Products";
// import Cart from "./Components/Cart";

// function App() {
//     return (
//         <>
//             <Navbar />

//             <Routes>
//                 <Route path="/" element={<Products />} />
//                 <Route path="/cart" element={<Cart />} />
//             </Routes>
//         </>
//     );
// }

// export default App;



                                
//usememo diffrenet language and products

// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";

// import Navbar from "./Components/Navbar";
// import Products from "./Pages/Products";
// import Summary from "./Pages/Summary";

// import "./App.css";

// function App() {
//     const [language, setLanguage] = useState("en");

//     const products = [
//         { id: 1, name: "Laptop", price: 50000 },
//         { id: 2, name: "Mobile", price: 20000 },
//         { id: 3, name: "Headphones", price: 2000 },
//         { id: 4, name: "Keyboard", price: 1500 },
//         { id: 5, name: "Mouse", price: 500 },
//         { id: 6, name: "Monitor", price: 12000 },
//     ];

//     return (
//         <div className="app">
//             <Navbar
//                 language={language}
//                 setLanguage={setLanguage}
//             />

//             <div className="container">
//                 <Routes>
//                     <Route
//                         path="/"
//                         element={
//                             <Products
//                                 products={products}
//                                 language={language}
//                             />
//                         }
//                     />

//                     <Route
//                         path="/summary"
//                         element={
//                             <Summary
//                                 products={products}
//                                 language={language}
//                             />
//                         }
//                     />
//                 </Routes>
//             </div>
//         </div>
//     );
// }

// export default App;



// 2nd code
import React, { useState, useMemo } from "react";

function App() {
    const [language, setLanguage] = useState("en");
    const [search, setSearch] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");

    const [products, setProducts] = useState([
        { id: 1, name: "Laptop", price: 20000 },
        { id: 2, name: "Mobile", price: 10000 },
        { id: 3, name: "Headphones", price: 1000 },
        { id: 4, name: "Keyboard", price: 1200 },
        { id: 5, name: "Mouse", price: 500 },
        { id: 6, name: "Monitor", price: 11000 },
    ]);

    // Language Translation
    const translations = {
        en: {
            brand: "Price Calculator",
            title: "Product Price Calculator",
            subtitle: "Manage Your Product Prices",
            addTitle: "Add New Product",
            products: "Product List",
            summary: "Price Summary",
            search: "Search Products...",
            name: "Product Name",
            price: "Product Price",
            productId: "Product ID",
            total: "Total Price",
            average: "Average Price",
            maximum: "Maximum Price",
            add: "Add Product",
            remove: "Remove",
            noProducts: "No Products Found",
            noData: "No Products Available",
            language: "मराठी",
            invalid: "Please enter a valid product name and price!",
            added: "Product added successfully!",
        },

        mr: {
            brand: "किंमत कॅल्क्युलेटर",
            title: "उत्पादन किंमत कॅल्क्युलेटर",
            subtitle: "उत्पादनांच्या किमती व्यवस्थापित करा",
            addTitle: "नवीन उत्पादन जोडा",
            products: "उत्पादनांची यादी",
            summary: "किंमतींचा सारांश",
            search: "उत्पादने शोधा...",
            name: "उत्पादनाचे नाव",
            price: "उत्पादनाची किंमत",
            productId: "उत्पादन क्रमांक",
            total: "एकूण किंमत",
            average: "सरासरी किंमत",
            maximum: "सर्वाधिक किंमत",
            add: "उत्पादन जोडा",
            remove: "काढून टाका",
            noProducts: "उत्पादने सापडली नाहीत",
            noData: "उत्पादने उपलब्ध नाहीत",
            language: "English",
            invalid: "कृपया योग्य उत्पादनाचे नाव आणि किंमत भरा!",
            added: "उत्पादन यशस्वीरित्या जोडले!",
        },
    };

    const t = translations[language];

    // Add Product
    const handleAddProduct = (e) => {
        e.preventDefault();

        const price = Number(productPrice);

        if (
            productName.trim() === "" ||
            productPrice.trim() === "" ||
            !Number.isFinite(price) ||
            price < 0
        ) {
            alert(t.invalid);
            return;
        }

        const newProduct = {
            id: Date.now(),
            name: productName.trim(),
            price: price,
        };

        setProducts((prev) => [...prev, newProduct]);

        setProductName("");
        setProductPrice("");

        alert(t.added);
    };

    // Remove Product
    const handleRemoveProduct = (id) => {
        setProducts((prev) =>
            prev.filter((product) => product.id !== id)
        );
    };

    // Search Product using useMemo
    const filteredProducts = useMemo(() => {
        return products.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [products, search]);

    // Expensive-style Price Calculations using useMemo
    const summary = useMemo(() => {
        const total = products.reduce(
            (sum, product) => sum + product.price,
            0
        );

        const average =
            products.length > 0
                ? total / products.length
                : 0;

        const maxProduct =
            products.length > 0
                ? products.reduce((max, product) =>
                    product.price > max.price ? product : max
                )
                : null;

        return {
            total,
            average,
            maxProduct,
        };
    }, [products]);

    // Format Price
    const formatPrice = (price) =>
        "₹" +
        price.toLocaleString("en-IN", {
            maximumFractionDigits: 2,
        });

    return (
        <div className="app">

            {/* Navbar */}
            <nav className="navbar">
                <h2>{t.brand}</h2>

                <button
                    className="language-btn"
                    onClick={() =>
                        setLanguage(language === "en" ? "mr" : "en")
                    }
                >
                    {t.language}
                </button>
            </nav>

            <div className="container">

                {/* Heading */}
                <h1>{t.title}</h1>
                <p className="subtitle">{t.subtitle}</p>

                {/* Add Product Section */}
                <section className="add-section">
                    <h2>{t.addTitle}</h2>

                    <form onSubmit={handleAddProduct} className="add-form">

                        <input
                            type="text"
                            placeholder={t.name}
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />

                        <input
                            type="number"
                            placeholder={t.price}
                            value={productPrice}
                            min="0"
                            step="0.01"
                            onChange={(e) => setProductPrice(e.target.value)}
                        />

                        <button type="submit" className="add-btn">
                            + {t.add}
                        </button>

                    </form>
                </section>

                {/* Product List */}
                <section>
                    <h2>{t.products}</h2>

                    <input
                        type="text"
                        className="search-input"
                        placeholder={t.search}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <div className="product-grid">

                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div className="product-card" key={product.id}>

                                    <h3>{product.name}</h3>

                                    <p>
                                        {t.productId}: {product.id}
                                    </p>

                                    <h4>
                                        {t.price}: {formatPrice(product.price)}
                                    </h4>

                                    <button
                                        className="remove-btn"
                                        onClick={() => handleRemoveProduct(product.id)}
                                    >
                                        {t.remove}
                                    </button>

                                </div>
                            ))
                        ) : (
                            <p className="no-products">
                                {products.length === 0
                                    ? t.noData
                                    : t.noProducts}
                            </p>
                        )}

                    </div>
                </section>

                {/* Price Summary */}
                <section className="summary-section">
                    <h2>{t.summary}</h2>

                    <div className="summary-grid">

                        <div className="summary-card">
                            <h3>{t.total}</h3>
                            <h2>{formatPrice(summary.total)}</h2>
                        </div>

                        <div className="summary-card">
                            <h3>{t.average}</h3>
                            <h2>{formatPrice(summary.average)}</h2>
                        </div>

                        <div className="summary-card">
                            <h3>{t.maximum}</h3>

                            {summary.maxProduct ? (
                                <>
                                    <h2>
                                        {formatPrice(summary.maxProduct.price)}
                                    </h2>
                                    <p>{summary.maxProduct.name}</p>
                                </>
                            ) : (
                                <p>{t.noData}</p>
                            )}
                        </div>

                    </div>
                </section>

            </div>
        </div>
    );
}

export default App;


/* CSS Styling */

const styles = document.createElement("style");

styles.textContent = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #f4f6f9;
  color: #222;
}

.app {
  min-height: 100vh;
}

.navbar {
  background: #222;
  color: white;
  padding: 18px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar h2 {
  font-size: 24px;
}

.language-btn {
  background: #10363f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
}

.language-btn:hover {
  background: #007f99;
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 30px 25px;
}

.container h1 {
  margin-bottom: 10px;
  font-size: 30px;
}

.subtitle {
  color: #666;
  margin-bottom: 25px;
}

.container section {
  margin-top: 35px;
}

.container section > h2 {
  margin-bottom: 20px;
}

/* Add Product */

.add-section {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 10px #00000010;
}

.add-form {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
}

.add-form input {
  flex: 1;
  min-width: 180px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 15px;
}

.add-btn {
  background: #16803c;
  color: white;
  border: none;
  padding: 12px 22px;
  border-radius: 6px;
  cursor: pointer;
}

.add-btn:hover {
  background: #10632e;
}

/* Search */

.search-input {
  width: 100%;
  max-width: 400px;
  padding: 12px;
  margin: 10px 0 25px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
}

/* Products */

.product-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(220px, 1fr)
  );
  gap: 20px;
}

.product-card {
  background: white;
  padding: 22px;
  border-radius: 10px;
  box-shadow: 0 2px 10px #00000015;
  transition: 0.2s;
}

.product-card:hover {
  transform: translateY(-4px);
}

.product-card h3 {
  color: #007f99;
  margin-bottom: 12px;
}

.product-card p {
  color: #666;
  margin-bottom: 12px;
}

.product-card h4 {
  color: #16803c;
  margin-bottom: 18px;
}

/* Remove */

.remove-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 9px 16px;
  border-radius: 6px;
  cursor: pointer;
}

.remove-btn:hover {
  background: #b02a37;
}

.no-products {
  color: red;
}

/* Summary */

.summary-section {
  padding-bottom: 40px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(220px, 1fr)
  );
  gap: 20px;
}

.summary-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 10px #00000015;
  transition: 0.2s;
}

.summary-card:hover {
  transform: translateY(-4px);
}

.summary-card h3 {
  color: #555;
  margin-bottom: 15px;
}

.summary-card h2 {
  color: #16803c;
  margin-bottom: 10px;
}

.summary-card p {
  color: #007f99;
}

/* Mobile Responsive */

@media (max-width: 600px) {
  .navbar {
    padding: 15px 20px;
  }

  .navbar h2 {
    font-size: 19px;
  }

  .container {
    padding: 20px 15px;
  }

  .container h1 {
    font-size: 24px;
  }

  .add-form {
    flex-direction: column;
  }

  .add-form input,
  .add-btn {
    width: 100%;
  }

  .product-grid,
  .summary-grid {
    grid-template-columns: 1fr;
  }
}
`;

if (!document.getElementById("calculator-styles")) {
    styles.id = "calculator-styles";
    document.head.appendChild(styles);