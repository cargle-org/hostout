import React,{ useState } from "react";
import axios, { Axios } from "axios";
import Link from "next/link";

const Login = () => 
{
    const url = "https://event-manager001.herokuapp.com/api/v1/auth/login";
    const [values ,setValues] = useState({
        email:"",
        password:"",
    });
    const  [ submitted , setSubmitted] = useState(false);
    const [valid , setValid] = useState(false);

    const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})
    }
    const handlePasswordInputChange = (event) => {
        setValues({...values, password: event.target.value})
    }

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        if(values.email && values.password)
        {
            setValid(true);
        }
        setSubmitted(true);
        axios.post(url,{
            email:values.email,
            password:values.password
        })
        .then((res) =>{ console.log(res)})
        .catch((val) => {console.log(values)})
    }


    return(
        <>
        <div className="login-body">
            <form className="Login-div" onSubmit={handleSubmit}>
                {/* Uncomment the next line to show the success message */}
        { submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : <div className="error-message">Register for Hostout</div>}
                <label htmlFor="email" className="login-label">Email*</label>
                <input 
                className="login-input " 
                type="text"
                name="email"
                placeholder="enter email"
                value={values.email} 
                onChange={handleEmailInputChange}/>
                <br />
                {/* Uncomment the next line to show the error message */}
        {submitted && !values.email ? <span className="error">Please enter an email</span> : null} 
                <br />
                <label htmlFor="password" className="login-label">Password*</label>
                <input
                className="login-input "  
                type="password"
                name="password"
                placeholder="enter your password"
                value={values.password}
                onChange={handlePasswordInputChange} />
                <br />
                {/* Uncomment the next line to show the error message */}
         {submitted && !values.password ? <span className="error">Please enter a your email</span>  : null}
                <br />
                <p>
                <Link href='/forgotPassword'>Forgot Password?</Link>
                </p>
                <button className="login-button" type="submit">Login</button>
            </form>
        </div>
        </>
    );
}

export default Login;