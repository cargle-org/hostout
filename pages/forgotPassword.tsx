import React ,{ useState, useContext }from 'react';
import axios , {Axios} from "axios";
import AppContext from "../context/AppContext";
import { success, error } from "../helpers/Alert";

function ForgotPassword() {

    const {authLoading, setAuthLoading} = useContext(AppContext)

    const [accountEmail, setAccountEmail] = useState({
        email:""
    })

    const onchangeHandler = (e) => {
        e.persist();
        setAccountEmail((item) => ({
        ...item,
        [e.target.name]: e.target.value,
        }));
    };

  const submit = async (e) => {
    e.preventDefault();
    console.log("accountEmail: ", accountEmail);
    try {
        setAuthLoading(true);
      const response = await axios.post(
        "https://event-manager001.herokuapp.com/api/v1/auth/forgot-password",
        accountEmail,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log("🚀 ~ file: forgotPassword.tsx ~ line 37 ~ submit ~ response", response)
      setAuthLoading(false);
      if (response.status === 201) {
        success(response.data.msg);
      }
    } catch (err) {
      error("Couldn't find account, try again");
      console.log(err);
      setAuthLoading(false);
    }
  };

  return (
    <div className='login-body'>
        <form className="Login-div" onSubmit={submit}>
            <label>Email   </label>
            <input type="email"
            className='login-input'
            name='email'
            required
            placeholder='Enter your account email'
            defaultValue={accountEmail.email}
            onChange={onchangeHandler}
             />
            <br />
             {authLoading ? (
            <button className="login-button">Loading...</button>
        ) : (
           <button className="login-button" type="submit">Reset</button>
        )}
            
        </form>
    </div>
  );
}

export default ForgotPassword;