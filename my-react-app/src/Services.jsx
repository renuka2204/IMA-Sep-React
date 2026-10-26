function Services() {
    return (
        <>
            <style>
                {`
        .services{
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
            .services h1 {
            font-size: 50px;
            margin-bottom: 10px;
          }

          .services p {
            font-size: 20px;
            margin-bottom: 25px;
          }
            
        `}
            </style>

            <div className="services">
                <h1>Services Page</h1>
                <p>We offer a wide range of services to meet your needs.</p>
            </div>

        </>
    );
}

export default Services;