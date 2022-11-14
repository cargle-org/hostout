import axios from "axios";
import { error } from "../helpers/Alert";

const CloudinaryUpload = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "duyaochq");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dpz3rs8ay/image/upload",
      formData
    );
    // console.log(
    //   "🚀 ~ file: CloudinaryUpload.jsx ~ line 14 ~ CloudinaryUpload ~ response",
    //   response.data.secure_url
    // );

    return response.data.secure_url;
  } catch (err) {
    error(err.data.message);
  }
};

export default CloudinaryUpload;
