function ProjectCard() {
    return (
        <>
            <style>
                {`
                    .projects {
                        background-color: #f5f5f5;
                        padding: 50px;
                        margin: 30px auto;
                        max-width: 900px;
                        text-align: center;
                        border-radius: 15px;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    }

                    .projects h1 {
                        color: #333;
                        font-size: 32px;
                    }

                    .projects > p {
                        color: #666;
                        font-size: 18px;
                    }

                    .project-container {
                        display: flex;
                        justify-content: center;
                        gap: 20px;
                        flex-wrap: wrap;
                        margin-top: 30px;
                    }

                    .project-card {
                        width: 220px;
                        background-color: white;
                        padding: 25px;
                        border-radius: 12px;
                        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
                    }

                    .project-card h2 {
                        color: #333;
                    }

                    .project-card p {
                        color: #666;
                    }

                    .project-card button {
                        background-color: #333;
                        color: white;
                        border: none;
                        padding: 10px 18px;
                        border-radius: 5px;
                        cursor: pointer;
                    }

                    .project-card button:hover {
                        background-color: #555;
                    }

                    .footer {
                        background-color: #333;
                        color: white;
                        text-align: center;
                        padding: 30px;
                        margin-top: 30px;
                    }

                    .footer h2 {
                        margin-bottom: 15px;
                    }

                    .footer p {
                        margin: 5px;
                        color: #ddd;
                    }

                    .footer a {
                        color: white;
                        text-decoration: none;
                        margin: 0 10px;
                    }

                    .footer a:hover {
                        text-decoration: underline;
                    }
                `}
            </style>

            <div className="projects">
                <h1>My Projects</h1>
                <p>Here are some of my projects:</p>

                <div className="project-container">

                    <div className="project-card">
                        <h2>Portfolio</h2>
                        <p>My personal portfolio website.</p>
                        <button>View Project</button>
                    </div>

                    <div className="project-card">
                        <h2>Flipkart App</h2>
                        <p>A simple instagram application using React.</p>
                        <button>View Project</button>
                    </div>

                    <div className="project-card">
                        <h2>Weather App</h2>
                        <p>A weather application using JavaScript.</p>
                        <button>View Project</button>
                    </div>

                </div>
            </div>

            <footer className="footer">
                <h2>My Portfolio</h2>

                <p>Thank you for visiting my portfolio!</p>

                <p>
                    <a href="#home">Home</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </p>

                <p>© 2026 My Portfolio. All Rights Reserved.</p>
            </footer>
        </>
    );
}

export default ProjectCard;
