import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then((data) => setProducts(data))
            .catch(() => setError("Something went wrong!"))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <div className="container">
            <h1>Our Products</h1>

            <div className="product-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.title} />

                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                        <p>{product.category}</p>

                        <button onClick={() => dispatch(addItem(product))}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;