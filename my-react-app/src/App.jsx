import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
}

export default App;