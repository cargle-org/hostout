import React, {  useState } from "react";
import axios , {  Axios } from "axios";




const ChangePassword = () => {
    const url = "https://event-manager001.herokuapp.com/api/v1/auth/change-password";
    const [values , setValues] = useState({
        old_password:"",
        new_password:"",
    });
    const [submitted , setSubmitted] = useState(false);
    const [valid , setValid] = useState(false);

    const handleOldPasswordInputChange =(event) =>{
        setValues({...values, old_password : event.target.value})
    }

    const handleNewPasswordInputChange = (event) => {
        setValues({...values, new_password : event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.new_password && values.old_password)
        {
            setValid(true);
        }
        setSubmitted(true);
        axios.post(url,{
            old_password:values.old_password,
            new_password:values.new_password
        })
        .then((res) => {console.log(res)})
        .catch((val) => {console.log(values)})
    }


    return(
        <div className="login-body" onSubmit={handleSubmit}>
            <form className="Login-input">
                <label htmlFor="oldPassword">Old Password</label>
                <input type="password"
                className="login-input"
                name="old_password"
                placeholder="Enter old Password"
                value={values.old_password}
                onChange={handleOldPasswordInputChange} />
                <br />
                <label htmlFor="newPassword">new Password</label>
                <input type="password"
                className="login-input"
                name="new_password"
                placeholder="Enter new Password"
                value={values.new_password}
                onChange={handleNewPasswordInputChange} />
                <br />
                <button className="login-button" type="submit">Change Password</button>
            </form>

        </div>
    );
}
export default ChangePassword;