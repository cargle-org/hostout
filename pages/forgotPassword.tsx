import React ,{ useState }from 'react';
import axios , {Axios} from "axios";

function ForgotPassword() {
    const url = "https://event-manager001.herokuapp.com/api/v1/auth/forgot-password";
    const [values ,setValues] = useState({
        email:""
    })
    const [submitted , setSubmitted] = useState(false);
    const [valid , setValid] = useState(false);

const handleEmailInputChange = () => {
    setValues({...values, email: event.target.value})
}

const handleSubmit = (e) => {
    e.preventDefault();
    if(values.email ){
        setValid(true);
    }
    setSubmitted(true);
    axios.post(url,{
        email:values.email
    })
    .then((res) => {console.log(res)})
    .catch((val) => {console.log(values)})
}

  return (
    <div className='login-body'>
        <form className="Login-div" onSubmit={handleSubmit}>
        { submitted && valid ? <div className="success-message">Password reset succesfully check email</div> : <div className="error-message">Input your registered Email</div>}
            <label htmlFor="email">Email   </label>
            <input type="email"
            className='login-input'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleEmailInputChange}
             />
            <br />
            <button className="login-button" type="submit">Reset</button>
        </form>
    </div>
  );
}

export default ForgotPassword;