import { useNavigate } from "react-router-dom";

function Products() {
    const navigate = useNavigate();
    const products = [
        {
            id: 1,
            name: "IPhone 13",
            price: 699.99,
            image: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/a/i/l/iphone-13-mini-mlk93hn-a-apple-original-imag6vp6x67yypzk.jpeg?q=70",
        },
        {
            id: 2,
            name: "Samsung Galaxy S21",
            price: 899.99,
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/y/s/-original-imagu4gtugngtufj.jpeg?q=70",
        },
        {
            id: 3,
            name: "Google Pixel 6",
            price: 799.99,
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/n/n/pixel-6a-gx7as-google-original-imahgdmachgcse9a.jpeg?q=70",
        },
        {
            id: 4,
            name: "OnePlus 9",
            price: 729.99,
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/7/i/-original-imaggceejthk79fq.jpeg?q=70",

        },
        {
            id: 5,
            name: "IPhone 17",
            price: 999.99,
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/a/f/-original-imahqvadmn9uydqz.jpeg?q=70",

        }
    ];
    return (
        <>
            <style>
                {`
                .product-list {
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    justify-content: space-around;   
                }
                 .product-list div {
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 20px;
                    text-align: center;
                    width: 250px;}

                .product-list img {
                    border-radius: 8px;
                    margin-bottom: 10px;
                }
                .product-list h2 {
                    font-size: 20px;
                    margin-bottom: 10px;
                }
                .product-list p {
                    font-size: 16px;
                    margin-bottom: 10px;
                }
                .product-list button {
                    padding: 10px 20px;
                    border: none; 
                    font-family: Arial, sans-serif;
                    border-radius: 8px;
                    background: #667eea;  
                }
                
                `}
            </style>
            <div>
                <h1>Products</h1>
                <div className="product-list">
                    {products.map((product) => (
                        <div key={product.id}>
                            <img src={product.image}
                                alt={product.name}
                                width="200"
                                height="200" />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                            <button onClick={() => navigate(`/products/${product.id}`)}>View</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}
export default Products;