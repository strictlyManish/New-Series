import toast from 'react-hot-toast';
import axios from "../../utils/axios.config";
import { loaduser, logoutuser } from '../reducers/userSlice';

// REGISTER
export const asyncRegisterUser = (user) => {
  return async (dispatch) => {
    try {
      await axios.post('/users', user);
    } catch (error) {
      toast.error('Error during registration');
    }
  };
};

// LOGIN
export const asyncLoginUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/users?email=${user.email}&password=${user.password}`);

      if (data.length > 0) {
        localStorage.setItem('user', JSON.stringify(data[0]));
        dispatch(loaduser(data[0]));
      } else {
        toast.error('Invalid Credentials');
      }

    } catch (error) {
      toast.error('Error during login');
    }
  };
};

// LOGOUT
export const asyncLogOutUser = () => {
  return (dispatch) => {
    try {
      localStorage.removeItem('user');
      dispatch(logoutuser());
    } catch (error) {
      console.log(error);
    }
  };
};

// LOAD CURRENT USER
export const asyncGetCurrentUser = () => {
  return (dispatch) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        dispatch(loaduser(user));
      }
    } catch (error) {
      toast.error('Login again or refresh page');
    }
  };
};


export const asyncUpdateuser = (id,user) => async (dispatch, getState) => {
  try {
    const {data} = await axios.patch("/users/" + id, user);
    localStorage.setItem('user', JSON.stringify(data));
  } catch (error) {
    toast.error('updation faild')
  }
};
export const asyncDeleteUser = (id) => async (dispatch, getState) => {
  try {
    await axios.delete(`/users/${id}`);
    dispatch(asyncLogOutUser())
  } catch (error) {
    toast.error('updation faild')
  }
};
