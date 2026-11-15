
import { useState, useMemo } from "react";
import "./Products.css";

function Products({ products, language }) {
    const [search, setSearch] = useState("");

    const translations = {
        en: {
            title: "Product Price Calculator",
            subtitle: "Explore product prices",
            search: "Search products...",
            productId: "Product ID",
            noProducts: "No products found",
            price: "Price",
        },
        mr: {
            title: "उत्पादन किंमत कॅल्क्युलेटर",
            subtitle: "उत्पादनांच्या किमती पहा",
            search: "उत्पादने शोधा...",
            productId: "उत्पादन क्रमांक",
            noProducts: "कोणतीही उत्पादने सापडली नाहीत",
            price: "किंमत",
        },
    };

    const t = translations[language];

    const filteredProducts = useMemo(() => {
        return products.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [products, search]);

    return (
        <div className="products-page">
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>

            <input
                type="text"
                placeholder={t.search}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
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
                                {t.price}: ₹{product.price.toLocaleString("en-IN")}
                            </h4>
                        </div>
                    ))
                ) : (
                    <p className="no-products">{t.noProducts}</p>
                )}
            </div>
        </div>
    );
}

export default Products;
