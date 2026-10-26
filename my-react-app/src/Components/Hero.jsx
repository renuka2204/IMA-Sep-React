import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
    return (
        <>
        <style>
            {`
            .hero {
                background: linear-gradient(135deg, #7589e2); 
                color: white;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-family: Arial, sans-serif;
            }
                .hero h1 {
                    font-size: 50px;
                    margin-bottom: 10px;
                }
                .hero p {
                    font-size: 20px;
                    margin-bottom: 25px;
                }

                .hero button {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 8px;
                    background: white;
                    color: #667eea; 
                    font-size: 14px;
                    font-weight: bold;
                    transition: 0.3s;
                }
                .hero button:hover {
                    background: #f0f0f0;
                    transform: scale(1.05);
                    color: #764ba2;
                    
                }
            `}
        </style>


        <div className="hero">
            <h1>Welcome to my Portfolio</h1>
            <p>I am a passionate developer who loves creating amazing web experiences.</p>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/female-freelance-designer-searching-for-work-online-illustration-svg-download-png-7650553.png" alt="Hero Image" width="500" height="300" />
            <button onClick={() => navigate("/skills")}>Explore My Skills</button>
        </div>
        </>
    );
}
export default Hero;