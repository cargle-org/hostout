import React, {  useState, useContext } from "react";
import AppContext from "../context/AppContext";
import axios from "axios";
import { success, error } from "../helpers/Alert";

const ChangePassword = () => {

    const {authLoading, setAuthLoading} = useContext(AppContext)

    const [changePassword, setChangePassword] = useState({
        old_password:"",
        new_password:"",
    })

    const onchangeHandler = (e) => {
        e.persist();
        setChangePassword((item) => ({
        ...item,
        [e.target.name]: e.target.value,
        }));
    };

  const submit = async (e) => {
    e.preventDefault();
    console.log("changePassword: ", changePassword);
    try {
        setAuthLoading(true);
      const response = await axios.post(
        "https://event-manager001.herokuapp.com/api/v1/auth/change-password",
        changePassword,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log("🚀 ~ file: changePassword.tsx ~ line 38 ~ submit ~ response", response)
      setAuthLoading(false);
      if (response.status === 201) {
        success(response.data.msg);
      }
    } catch (err) {
      error("Couldn't change password :(");
      console.log(err);
      setAuthLoading(false);
    }
  };




    return(
        <div className="login-body" >
            <form className="Login-input" onSubmit={submit}>
                <label >Old Password</label>
                <input type="password"
                className="login-input"
                name="old_password"
                placeholder="Enter old Password"
                required
                defaultValue={changePassword.old_password}
                onChange={onchangeHandler} />

                <br />

                <label>new Password</label>
                <input type="password"
                className="login-input"
                name="new_password"
                required
                placeholder="Enter new Password"
                defaultValue={changePassword.new_password}
                onChange={onchangeHandler} />
                <br />
                {authLoading ? (
                    <button className="login-button">Loading...</button>
                ) : (
                    <button className="login-button" type="submit">Change Password</button>
                )}
               
            </form>

        </div>
    );
}
export default ChangePassword;