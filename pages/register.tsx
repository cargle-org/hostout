import type { NextPage } from 'next'
import React,{ useState, useContext } from "react"
import  axios from "axios";
import {success,  error} from "../helpers/Alert";
import AppContext from '../context/AppContext';

const Register: NextPage =() =>
{

    const {authLoading, setAuthLoading} = useContext(AppContext)

    const [newUser, setNewUser] = useState({
        name:"",
        email:"",
        password:"",
    })

    const onchangeHandler = (e) => {
        e.persist();
        setNewUser((item) => ({
        ...item,
        [e.target.name]: e.target.value,
        }));
    };

  const submit = async (e) => {
    e.preventDefault();
    console.log("newUser: ", newUser);
    try {
          setAuthLoading(true);
      const response = await axios.post(
        "https://event-manager001.herokuapp.com/api/v1/auth/register",
        newUser,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
    //   console.log("🚀 ~ file: register.tsx ~ line 38 ~ submit ~ response", response)
      setAuthLoading(false);
      if (response.status === 201) {
        success(response.data.msg);
      }
    } catch (err) {
      error("Couldn't create user");
      console.log(err);
      setAuthLoading(false);
    }
  };

return(
<>
<div className="login-body">
    <form className="Login-div" onSubmit={submit}>
        <label className="login-label">Name*  </label>
        <input
        className="login-input"
        onChange={onchangeHandler}
        type="text"
        required
        name="name"
        placeholder="enter your name"
        defaultValue={newUser.name} />
        <br />
        <label className="login-label">Email*  </label>
        <input
        className="login-input"
        onChange={onchangeHandler}
        type="email"
        required
        name="email"
        placeholder="e.g youremail@email.com"
        defaultValue={newUser.email} />
        <br />
        <label className="login-label">Password*  </label>
        <input
        className="login-input"
        name="password"
        onChange={onchangeHandler}
        type="password" 
        required
        placeholder="At least 6 characters"
        defaultValue={newUser.password} />
        <br />
        {authLoading ? (
            <button className="login-button">Loading...</button>
        ) : (
            <button className="login-button" type="submit" >Register</button>
        )}
    </form>
</div>
</>
);

}
export default Register;