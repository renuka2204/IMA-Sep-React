import { useDispatch, useSelector } from "react-redux";
import {
    addItem,
    removeItem,
    clearCart,
} from "../redux/cartSlice";

function Cart() {
    const dispatch = useDispatch();

    const items = useSelector((state) => state.cart.items);

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="container">
            <h1>My Cart</h1>

            {items.length === 0 ? (
                <h2>Your cart is empty!</h2>
            ) : (
                <>
                    {items.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <div>
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price.toFixed(2)}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>

                            <button
                                onClick={() =>
                                    dispatch(addItem({
                                        id: item.id,
                                        title: item.name,
                                        price: item.price,
                                    }))
                                }
                            >
                                +
                            </button>

                            <button
                                onClick={() => dispatch(removeItem(item.id))}
                            >
                                -
                            </button>
                        </div>
                    ))}

                    <h2>Total: ${total.toFixed(2)}</h2>

                    <button onClick={() => dispatch(clearCart())}>
                        Clear Cart
                    </button>
                </>
            )}
        </div>
    );
}

export default Cart;