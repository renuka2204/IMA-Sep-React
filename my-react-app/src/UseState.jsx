import React from "react";
import { useState } from "react";

function UseState() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Anushka");
    const [age, setAge] = useState(20);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
        <style>
        {`
            div {
                display: flex;  
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: Arial, sans-serif;
            }
                div button {
                margin: 5px;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                background-color: #4CAF50;
                color: white;
                font-size: 15px;
            }  


            `}
        </style>


        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 2)}>Increment</button>
             <button onClick={() => setCount(count - 1)}>Decrement</button>
             <button onClick={() => setCount(0)}>Reset</button>
             {/* <button onClick={() => setCount(count * 2)}>Double</button>
             <button onClick={() => setCount(count / 2)}>Halve</button>  */}
        </div><hr /><hr />

        <div className="counter">
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h2>LoggedIn: {isLoggedIn ? "Yes" : "No"}</h2> 
            <button onClick={() => setName("Renuka")}>Change Name</button>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
        </div>


        </>
    );
}
export default UseState;