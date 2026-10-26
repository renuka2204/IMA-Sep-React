import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const products = [
        {
            id: 1,
            name: "IPhone 13",
            price: 699.99,
            image: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/a/i/l/iphone-13-mini-mlk93hn-a-apple-original-imag6vp6x67yypzk.jpeg?q=70",
            description: "The iPhone 13 features a sleek design, powerful A15 Bionic chip, and an advanced dual-camera system for stunning photos and videos. and a sleek design that is both durable and stylish.",
        },
        {
            id: 2,
            name: "Samsung Galaxy S21",
            price: 899.99,
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/y/s/-original-imagu4gtugngtufj.jpeg?q=70",
            description: "The Samsung Galaxy S21 offers a stunning display, powerful performance, and a versatile camera system. and a sleek design that is both durable and stylish.",
        },
        {
            id: 3,
            name: "Google Pixel 6",
            price: 799.99,
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/n/n/pixel-6a-gx7as-google-original-imahgdmachgcse9a.jpeg?q=70",
            description: "The Google Pixel 6 features a clean design, Google's custom Tensor chip, and an excellent camera system for capturing high-quality photos. and a sleek design that is both durable and stylish.",
        },
        {
            id: 4,
            name: "OnePlus 9",
            price: 729.99,
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/7/i/-original-imaggceejthk79fq.jpeg?q=70",
            description: "The OnePlus 9 offers a smooth and fast user experience, a high-refresh-rate display, and a capable camera system. and a sleek design that is both durable and stylish.",

        },
        {
            id: 5,
            name: "IPhone 17",
            price: 999.99,
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/a/f/-original-imahqvadmn9uydqz.jpeg?q=70",
            description: "The iPhone 17 is the latest flagship from Apple, featuring cutting-edge technology, a stunning display, and an advanced camera system for professional-quality photos and videos. and a sleek design that is both durable and stylish.",
        }
    ];
    const product = products.find((product) => product.id === Number(id));
    if (!product) {
        return <h2>Product not found</h2>;
    }
    return (
        <>
            <style>
                {`
                .product-list {
            width: 80%;
            max-width: 900px;
            margin: 40px auto;
            padding: 30px;
            background: #ffffff;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
            text-align: center;
        }

        .product-list h1 {
            color: #222;
            margin: 20px 0;
        }

        .product-list img {
            width: 400px;
            height: 350px;
            object-fit: contain;
            border-radius: 10px;
            margin: 20px 0;
        }

        .product-list p {
            font-size: 18px;
            color: #555;
            line-height: 1.6;
            margin: 15px auto;
            max-width: 700px;
        }

        .product-list p:nth-of-type(1) {
            font-size: 24px;
            font-weight: bold;
            color: #e63946;
        }

        .product-list button {
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            transition: 0.3s;
        }

        .product-list > button:first-child {
            float: left;
            background-color: #555;
            color: white;
        }

        .product-list > button:first-child:hover {
            background-color: #333;
        }

        .product-list .butn {
            margin-top: 20px;
            padding: 12px 30px;
            background-color: #2874f0;
            color: white;
            font-weight: bold;
        }

        .product-list .butn:hover {
            background-color: #1259c3;
            transform: scale(1.05);
        }
        
            `}
            </style>

            <div>
                <div className="product-list">
                    <button onClick={() => navigate(-1)}>Back</button>
                    <h1>Products Details</h1>
                    <img src={product.image}
                        alt={product.name}
                        width="400" height="350" />

                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <button className="butn">Add to Cart</button>
                </div>
            </div>
        </>
    )
}
export default ProductDetail;