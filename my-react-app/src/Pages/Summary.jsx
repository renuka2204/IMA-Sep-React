
import { useMemo } from "react";
import "./Summary.css";

function Summary({ products, language }) {
    const translations = {
        en: {
            title: "Price Summary",
            total: "Total Price",
            average: "Average Price",
            maximum: "Maximum Price",
            noProduct: "No products available",
        },
        mr: {
            title: "किंमतींचा सारांश",
            total: "एकूण किंमत",
            average: "सरासरी किंमत",
            maximum: "सर्वाधिक किंमत",
            noProduct: "उत्पादने उपलब्ध नाहीत",
        },
    };

    const t = translations[language];

    const summary = useMemo(() => {
        const total = products.reduce(
            (sum, product) => sum + product.price,
            0
        );

        const average =
            products.length > 0 ? total / products.length : 0;

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

    return (
        <div className="summary-page">
            <h1>{t.title}</h1>

            <div className="summary-grid">
                <div className="summary-card">
                    <h3>{t.total}</h3>
                    <h2>₹{summary.total.toLocaleString("en-IN")}</h2>
                </div>

                <div className="summary-card">
                    <h3>{t.average}</h3>
                    <h2>
                        ₹{summary.average.toLocaleString("en-IN", {
                            maximumFractionDigits: 2,
                        })}
                    </h2>
                </div>

                <div className="summary-card">
                    <h3>{t.maximum}</h3>

                    {summary.maxProduct ? (
                        <>
                            <h2>
                                ₹{summary.maxProduct.price.toLocaleString("en-IN")}
                            </h2>
                            <p>{summary.maxProduct.name}</p>
                        </>
                    ) : (
                        <p>{t.noProduct}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Summary;
