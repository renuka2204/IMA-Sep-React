// import { useState,} from 'react';
// function Events() {
//     const [ name,  setName] = useState("");
//     const [ email, setEmail] = useState("");

//     return (
//         <>
//         <div>
//             <h1>Input handling</h1>
//              <div>
//                 <label>Name: </label>
//                 <input type= "text" 
//                 value={name}
//                 onChange={(event) => setName(event.target.value)}
//                 placeholder="Enter your name" />

//                 <p>Current value: {name}</p>
//                 <button onClick={() => setName ("Renuka")}>Set Name</button>
//             </div>
//             <br />

//             <div>
//                 <label>Email: </label>
//                 <input type= "email" 
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//                 placeholder="Enter your email" />
//             </div>
//         </div>
//         </>
//     )
// }
// export default Events;



// import { useState } from 'react';
// function RegistrationForm() { 
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");

//     function handleSubmit(event) {
//         event.preventDefault();
//           console.log({
//              name, 
//              email }); 
//     }

//     return (
//         <>
//         <style>
//             {`
//             .form-group {
//                 margin-bottom: 1rem;
//             }
//             label {
//                 display: block;
//                 margin-bottom: 0.5rem;
//             }
//             input {
//                 padding: 0.5rem;
//                 border: 1px solid #ccc;
//                 border-radius: 4px;
//             }
//             button {
//                 padding: 0.5rem 1rem;
//                 background-color: #007bff;
//                 color: white;
//                 border: none;
//             }
//                 button:hover {
//                 background-color: #0056b3;
//             }


//             `}

//         </style>

//         <form onSubmit={handleSubmit}>
//             <div className="form-group">
//                 <h1>Registration Form</h1>
//                 <label>Name: </label>
//                 <input type="text" 
//                     value={name}
//                     onChange={(event) => setName(event.target.value)}
//                     placeholder="Enter your name" />
//             </div>
//             <br />
//             <div className="form-group">
//                 <label>Email: </label>
//                 <input type="email" 
//                     value={email}
//                     onChange={(event) => setEmail(event.target.value)}
//                     placeholder="Enter your email" />
//             </div>
//             <br />
//             <button type="submit">Register</button>
//         </form>
//         </>
//     )
// }
// export default RegistrationForm;

// Login Form Create: None Email Password Login Button Use: ● useState ● onChange ● onSubmit When submitted, display the entered values in the console. 

import { useState } from 'react';
function LoginForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log({
            email,
            password
        });
    }

    return (
        <>
        <style>
            {`
            .form-group {
                margin-bottom: 1rem;
            }
            label {
                display: block;
                margin-bottom: 0.5rem;
            }
            input {
                padding: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
            button {
                padding: 0.5rem 1rem;
                background-color: #007bff;
                color: white;
                border: none;
            }
            button:hover {
                background-color: #0056b3;
            }

            `}

        </style>

        <form onSubmit={handleSubmit}>
             <div>
                <label>Name: </label>
                <input 
                    type="text" 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter your name" />
            </div>
            <br />
            <div>
                <label>Email: </label>
                <input 
                    type="email" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email" />
            </div>
            <br />
            <div>
                <label>Password: </label>
                <input 
                    type="password" 
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password" />
            </div>
            <br />
            <button type="submit">Login</button>
        </form>
        </>
    );
}
export default LoginForm;