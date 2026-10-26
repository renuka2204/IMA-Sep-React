import { useNavigate } from "react-router-dom";

function SkillCard() {
    const navigate = useNavigate();
    return (
        <>
        <style>
            {`
             .skills {
                        background-color: #f5f5f5;
                        padding: 20px;
                        margin: 20px auto;
                        height: 60vh;
                        max-width: 700px;
                        text-align: center;
                        border-radius: 15px;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    }

                    .skills h1 {
                        font-size: 40px;
                        margin-bottom: 20px;
                        color: #333;
                    }
                    .skills p {
                        font-size: 20px;
                        margin-bottom: 30px;
                        color: #666;
                    }
                    .skills ul {
                        list-style-type: none;
                        padding: 0;
                    }
                    .skills li {
                        font-size: 20px;
                        margin: 10px 0;
                        color: #444;
                    }
                    .skills button {
                        padding: 5px 10px;
                        border: none;
                        border-radius: 8px;
                        background: #667eea;
                        color: white;
                        font-size: 10px;
                        float: left;
                    }
                    .skills button:hover {
                        background: #555;
                    }  
                    .skills .butn button {
                        margin-top: 80px;
                        background: #555;
                        text-align: center;
                        justify-content: center;
                        display: flex;
                        float: right;
                        padding: 10px 20px;
                        border: none;
                        border-radius: 8px;
                        
                    }
                      

            
            `}
        </style>


        <div className="skills">
             <button onClick={() => window.history.back()}>Go Back</button>
            <h1>My Skills</h1>
            <p>Here are some of my skills:</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
            </ul>

            <div  className="butn">
                <button onClick={() => navigate('/projects')}>Projects > </button>
            </div>

           
        </div>
        </>
    );
}
export default SkillCard;