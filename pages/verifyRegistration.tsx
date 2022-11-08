import React, {  useState, useContext } from "react";
import AppContext from "../context/AppContext";
import axios from "axios";
import { success, error } from "../helpers/Alert";

const VerifyRegistration = () => {

    const {authLoading, setAuthLoading} = useContext(AppContext)

    const [userDetails, setuserDetails] = useState({
        id:"",
        token:"",
    })


  const submit = async (e) => {
    e.preventDefault();
    console.log("userDetails: ", userDetails);
    try {
        setAuthLoading(true);
      const response = await axios.patch(
        `https://event-manager001.herokuapp.com/api/v1/auth/confirm-registration/${userDetails.id}/${userDetails.token}`,
        userDetails,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log("🚀 ~ file: userDetails.tsx ~ line 38 ~ submit ~ response", response)
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
            <h1>Verifying Email, please wait...</h1>
        </div>
    );
}
export default VerifyRegistration;