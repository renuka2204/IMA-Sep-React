import { createContext, useContext, useState } from "react";
import "./App.css";

// 1. Create Context
const ThemeContext = createContext();

// 2. Create Provider
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme((prevTheme) =>
            prevTheme === "light" ? "dark" : "light"
        );
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// 3. Create Navbar
function Navbar() {
    const { theme } = useContext(ThemeContext);

    return (
        <nav className="navbar">
            <h2>My Website</h2>
        </nav>
    );
}

// 4. Create Theme Button
function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
    );
}

// 5. Main Page
function Home() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`app ${theme}`}>
            <Navbar />

            <div className="content">
                <h1>Welcome</h1>
                <p>This is my React website.</p>

                <ThemeButton />
            </div>
        </div>
    );
}

// 6. Export App
export default function App() {
    return (
        <ThemeProvider>
            <Home />
        </ThemeProvider>
    );
}



// //css

// * {
//     box- sizing: border - box;
// }

// body {
//     margin: 0;
//     font - family: Arial, sans - serif;
// }

// .app {
//     min - height: 100vh;
//     transition: background - color 0.3s, color 0.3s;
// }

// .light {
//     background - color: #ffffff;
//     color: #222222;
// }

// .dark {
//     background - color: #121212;
//     color: #ffffff;
// }

// .navbar {
//     display: flex;
//     justify - content: space - between;
//     align - items: center;
//     padding: 20px;
//     background - color: rgb(203, 133, 133);
//     color: black;
// }

// .content {
//     text - align: center;
//     justify - content: center;
//     padding: 50px 20px;
// }

// button {
//     padding: 12px 24px;
//     background - color: rgb(203, 133, 133);
//     color: black;
//     border: none;
//     border - radius: 8px;
//     cursor: pointer;
//     font - size: 16px;
// }

// button:hover {
//     opacity: 0.85;
// }
