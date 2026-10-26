function About() {
  return (
    <>
      <style>
        {`

        .about{
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
        
         .about h1 {
            font-size: 50px;
            margin-bottom: 10px;
          }  
          
      `}

      </style>


      <div className="about">
        <h1>About Page</h1>
        <p>My name is Renuka Shinge.</p>
        <p>I am learning full stack devlopment.</p>
      </div>

    </>
  );
}

export default About;