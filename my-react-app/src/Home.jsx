import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <style>
        {`
          .home {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            text-align: center;
            font-family: Arial, sans-serif;
          }

          .home h1 {
            font-size: 50px;
            margin-bottom: 10px;
          }

          .home p {
            font-size: 20px;
            margin-bottom: 25px;
          }

          .home button {
            padding: 12px 25px;
            border: none;
            border-radius: 8px;
            background: white;
            color: #667eea;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
          }

          .home button:hover {
            background: #f0f0f0;
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="home">
        <h1>Home Page</h1>
        <p>Welcome to my React website.</p>
        <button onClick={() => navigate("/hero")}>Get Started</button>
      </div>
    </>
  );
}

export default Home;