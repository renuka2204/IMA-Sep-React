
import React, { useEffect, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams,
    useNavigate,
} from "react-router-dom";
import "./App.css";

const API = "https://fakestoreapi.com/products";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(API)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch products");
                return res.json();
            })
            .then(setProducts)
            .catch(() => setError("Unable to load products. Please try again."))
            .finally(() => setLoading(false));
    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return <h2 className="message">Loading products...</h2>;
    }

    if (error) {
        return <h2 className="message error">{error}</h2>;
    }

    return (
        <div className="container">
            <header className="header">
                <Link to="/" className="logo">ShopEase</Link>
                <span>Discover your next favorite</span>
            </header>

            <section className="hero">
                <p className="eyebrow">THE COLLECTION</p>
                <h1>Find your next favorite.</h1>
                <p>Explore products picked just for you.</p>

                <input
                    className="search"
                    type="search"
                    placeholder="Search products by title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search products by title"
                />
            </section>

            <div className="section-heading">
                <h2>All Products</h2>
                <span>{filteredProducts.length} products</span>
            </div>

            {filteredProducts.length === 0 ? (
                <p className="message">No products found. Try another search.</p>
            ) : (
                <div className="product-grid">
                    {filteredProducts.map((product) => (
                        <Link
                            to={`/product/${product.id}`}
                            className="product-card"
                            key={product.id}
                        >
                            <div className="image-box">
                                <img src={product.image} alt={product.title} loading="lazy" />
                            </div>

                            <div className="product-info">
                                <span className="category">{product.category}</span>
                                <h3>{product.title}</h3>
                                <div className="card-bottom">
                                    <strong>${product.price.toFixed(2)}</strong>
                                    <span className="view-link">View details →</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let cancelled = false;

        setLoading(true);
        setError("");
        setProduct(null);

        fetch(`${API}/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Product not found");
                return res.json();
            })
            .then((data) => {
                if (!data || !data.id) throw new Error("Product not found");
                if (!cancelled) setProduct(data);
            })
            .catch(() => {
                if (!cancelled) setError("Unable to load this product.");
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, [id]);

    if (loading) return <h2 className="message">Loading product details...</h2>;

    if (error) {
        return (
            <div className="message">
                <p className="error">{error}</p>
                <button onClick={() => navigate("/")}>Back to products</button>
            </div>
        );
    }

    return (
        <div className="container">
            <header className="header">
                <Link to="/" className="logo">ShopEase</Link>
                <Link to="/" className="back-link">← All products</Link>
            </header>

            <div className="details-card">
                <div className="details-image">
                    <img src={product.image} alt={product.title} />
                </div>

                <div className="details-info">
                    <span className="category">{product.category}</span>
                    <h1>{product.title}</h1>
                    <div className="price">${product.price.toFixed(2)}</div>
                    {product.rating && (
                        <p className="rating">
                            ★ {product.rating.rate} / 5 ({product.rating.count} reviews)
                        </p>
                    )}
                    <p className="description">{product.description}</p>
                    <button className="back-button" onClick={() => navigate("/")}>
                        ← Back to products
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route
                    path="*"
                    element={
                        <div className="message">
                            <h2>Page not found</h2>
                            <Link to="/">Return to products</Link>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}


// //css

// @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');

// * {
//     box- sizing: border - box;
// }

// body {
//     margin: 0;
//     background: #faf9f6;
//     color: #252820;
//     font - family: 'DM Sans', sans - serif;
// }

// a {
//     color: inherit;
//     text - decoration: none;
// }

// .container {
//     max - width: 1200px;
//     margin: auto;
//     padding: 0 28px 60px;
// }

// .header {
//     min - height: 78px;
//     display: flex;
//     align - items: center;
//     justify - content: space - between;
//     border - bottom: 1px solid #e9e7df;
// }

// .logo {
//     font - size: 25px;
//     font - weight: 700;
//     letter - spacing: -1px;
// }

// .header > span,
// .back - link {
//     color: #77786e;
//     font - size: 14px;
// }

// .hero {
//     text - align: center;
//     padding: 70px 0 55px;
// }

// .eyebrow {
//     color: #75805c;
//     font - size: 12px;
//     font - weight: 700;
//     letter - spacing: 3px;
// }

// .hero h1,
// .details - info h1 {
//     font - family: 'Playfair Display', serif;
// }

// .hero h1 {
//     font - size: clamp(36px, 5vw, 58px);
//     margin: 14px 0;
//     letter - spacing: -1.5px;
// }

// .hero > p: not(.eyebrow) {
//     color: #77786e;
//     margin - bottom: 28px;
// }

// .search {
//     display: block;
//     width: min(100 %, 490px);
//     margin: 0 auto;
//     padding: 15px 18px;
//     border: 1px solid #deded4;
//     border - radius: 8px;
//     background: white;
//     font: inherit;
//     outline: none;
// }

// .search:focus {
//     border - color: #75805c;
//     box - shadow: 0 0 0 3px #75805c20;
// }

// .section - heading {
//     display: flex;
//     align - items: center;
//     justify - content: space - between;
//     margin - bottom: 22px;
// }

// .section - heading h2 {
//     font - size: 23px;
// }

// .section - heading span {
//     color: #77786e;
//     font - size: 14px;
// }

// .product - grid {
//     display: grid;
//     grid - template - columns: repeat(4, minmax(0, 1fr));
//     gap: 24px;
// }

// .product - card {
//     overflow: hidden;
//     border: 1px solid #eceae3;
//     border - radius: 12px;
//     background: #fff;
//     transition: transform 0.2s, box - shadow 0.2s;
// }

// .product - card:hover {
//     transform: translateY(-4px);
//     box - shadow: 0 12px 30px #25282012;
// }

// .image - box {
//     height: 230px;
//     display: flex;
//     align - items: center;
//     justify - content: center;
//     padding: 25px;
//     background: #fff;
// }

// .image - box img {
//     max - width: 100 %;
//     max - height: 100 %;
//     object - fit: contain;
// }

// .product - info {
//     padding: 18px;
//     border - top: 1px solid #f0eee8;
// }

// .category {
//     display: inline - block;
//     color: #75805c;
//     background: #eff1e9;
//     padding: 6px 9px;
//     border - radius: 4px;
//     font - size: 11px;
//     text - transform: capitalize;
// }

// .product - info h3 {
//     height: 44px;
//     overflow: hidden;
//     margin: 13px 0 18px;
//     font - size: 14px;
//     line - height: 1.6;
//     font - weight: 600;
// }

// .card - bottom {
//     display: flex;
//     align - items: center;
//     justify - content: space - between;
//     gap: 8px;
// }

// .card - bottom strong {
//     font - size: 18px;
// }

// .view - link {
//     color: #75805c;
//     font - size: 12px;
//     white - space: nowrap;
// }

// .message {
//     padding: 60px 20px;
//     text - align: center;
// }

// .error {
//     color: #c0392b;
// }

// .details - card {
//     display: grid;
//     grid - template - columns: 1fr 1fr;
//     gap: 55px;
//     align - items: center;
//     padding: 60px 0;
// }

// .details - image {
//     height: 450px;
//     display: flex;
//     justify - content: center;
//     align - items: center;
//     padding: 35px;
//     border: 1px solid #eceae3;
//     border - radius: 14px;
//     background: white;
// }

// .details - image img {
//     max - width: 100 %;
//     max - height: 100 %;
//     object - fit: contain;
// }

// .details - info h1 {
//     font - size: 36px;
//     line - height: 1.25;
// }

// .price {
//     font - size: 30px;
//     font - weight: 700;
//     margin: 20px 0;
// }

// .rating {
//     color: #8b7041;
// }

// .description {
//     color: #71736a;
//     line - height: 1.9;
// }

// .back - button,
// .message button {
//     border: 0;
//     border - radius: 7px;
//     background: #68764e;
//     color: white;
//     padding: 14px 20px;
//     margin - top: 20px;
//     font: inherit;
//     cursor: pointer;
// }

// @media(max - width: 650px) {
//   .container {
//         padding: 0 16px 40px;
//     }

//   .header > span {
//         display: none;
//     }

//   .hero {
//         padding: 48px 0 35px;
//     }

//   .product - grid {
//         grid - template - columns: repeat(2, minmax(0, 1fr));
//         gap: 12px;
//     }

//   .image - box {
//         height: 170px;
//         padding: 18px;
//     }

//   .product - info {
//         padding: 12px;
//     }

//   .product - info h3 {
//         font - size: 13px;
//     }

//   .card - bottom {
//         align - items: flex - start;
//         flex - direction: column;
//     }

//   .details - card {
//         grid - template - columns: 1fr;
//         padding: 30px 0;
//         gap: 25px;
//     }

//   .details - image {
//         height: 300px;
//     }

//   .details - info h1 {
//         font - size: 29px;
//     }
// }
