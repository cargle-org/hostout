import React,{ useState } from "react"
import  { Axios } from "axios";

const Register:Nextpage =() =>
{
    const url = "https://event-manager001.herokuapp.com/api/v1/auth/register";
    const [values , setValues] =useState({
        name:"",
        email:"",
        password:"",
    }) ;
    const  [ submitted , setSubmitted] = useState(false);
    const [valid , setValid] = useState(false);
    const axios = require('axios').default;

    // enables SetValues
const handleFirstNameInputChange = (event) => {
    setValues({...values, name: event.target.value})
}

/*const handleLastNameInputChange = (event) => {
    setValues({...values, lastname: event.target.value})
} */

const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
}

const handlePasswordInputChange = (event) => {
    setValues({...values, password: event.target.value})
}

// Posts 
const   handleSubmit = (event) => {
    event.preventDefault();
    if(values.name && values.email && values.password ){
        setValid(true);
    }
    setSubmitted(true);
   axios.post(url,{
    name:values.name,
    email:values.email,
    password:values.password
   })
   .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  console.log(values)
}





return(
<>
<div className="login-body">
    <form action="" className="Login-div" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        { submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : <div className="error-message">Register for Hostout</div>}
        <label htmlFor="name" className="login-label">Name*  </label>
        <input
        className="login-input"
        onChange={handleFirstNameInputChange}
        type="text"
        name="firstname" 
        placeholder="enter your first name"
        value={values.name} />
        <br />
         {/* Uncomment the next line to show the error message */}
        {submitted && !values.name ? <span className="error-message">Please enter a name</span> : null} 
        
        <br />
        <label htmlFor="email" className="login-label">Email*  </label>
        <input
        className="login-input"
        onChange={handleEmailInputChange}
        type="email"
        name="email"
        placeholder="youremail@email.com"
        value={values.email} />
        <br />
         {/* Uncomment the next line to show the error message */}
         {submitted && !values.email ? <span className="error">Please enter a your email</span>  : null} <br />
        <label htmlFor="password" className="login-label">Password*  </label>
        <input
        className="login-input " 
        onChange={handlePasswordInputChange}
        type="password" 
        placeholder="********"
        value={values.password} />
        <br />
         {/* Uncomment the next line to show the error message */}
         {submitted && !values.password ? <span className="error">Please enter a your password</span>   : null}<br />
        <button className="login-button"type="submit" >submit</button>
    </form>
</div>
</>
);

}
export default Register;