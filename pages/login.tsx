import React,{ useState, useContext } from "react";
import axios, { Axios } from "axios";
import Link from "next/link";
import AppContext from "../context/AppContext";
import { success, error } from "../helpers/Alert";

const Login = () => 
{

    const {authLoading, setAuthLoading} = useContext(AppContext)

    const [loginDetails, setloginDetails] = useState({
        email:"",
        password:"",
    })

    const onchangeHandler = (e) => {
        e.persist();
        setloginDetails((item) => ({
        ...item,
        [e.target.name]: e.target.value,
        }));
    };

  const submit = async (e) => {
    e.preventDefault();
    console.log("loginDetails: ", loginDetails);
    try {
        setAuthLoading(true);
      const response = await axios.post(
        "https://event-manager001.herokuapp.com/api/v1/auth/login",
        loginDetails,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log("🚀 ~ file: login.tsx ~ line 37 ~ submit ~ response", response)
      setAuthLoading(false);
      if (response.status === 201) {
        success(response.data.msg);
      }
    } catch (err) {
      error("Login failed!");
      console.log(err);
      setAuthLoading(false);
    }
  };


    return(
        <>
        <div className="login-body">
            <form className="Login-div" onSubmit={submit}>

                <label className="login-label">Email*</label>
                <input 
                className="login-input " 
                type="email"
                name="email"
                required
                placeholder="e.g youremail@email.com"
                defaultValue={loginDetails.email} 
                onChange={onchangeHandler}/>
                <br />
                <label  className="login-label">Password*</label>
                <input
                className="login-input "  
                type="password"
                name="password"
                required
                placeholder="At least 6 characters"
                defaultValue={loginDetails.password}
                onChange={onchangeHandler} />
                <br />
                <p>
                <Link href='/forgotPassword'>Forgot Password?</Link>
                </p>
                {authLoading ? (
                    <button className="login-button">Loading...</button>
                ) : (
                    <button className="login-button" type="submit">Login</button>
                )}
            </form>
        </div>
        </>
    );
}

export default Login;