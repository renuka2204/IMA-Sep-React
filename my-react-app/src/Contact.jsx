function Contact() {
    return (
        <>
            <style>
                {`
        .contact{
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
            .contact h1 {
            font-size: 50px;
            margin-bottom: 10px;
          }

          .contact p {
            font-size: 20px;
            margin-bottom: 25px;
          }

        `}
            </style>

            <div className="contact">
                <h1>Contact Page</h1>
                <p>You can reach us at contact@example.com</p>
            </div>

        </>
    );
}

export default Contact;