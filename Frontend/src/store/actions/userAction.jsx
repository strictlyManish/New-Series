import axios from '../../api/axiosconfig';
import { toast } from 'react-hot-toast';

export const asyncRegisterUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post('/register', user, {
      withCredentials: true,
    });
    toast.success("User registered successfully");
    return res.data; // Return data if needed
  } catch (error) {
    toast.error(error.response?.data?.message || "User not registered"); 
  }
};
