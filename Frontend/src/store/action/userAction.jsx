import axios from '../../api/axiosconfig';
import toast from 'react-hot-toast';
import { loaduser } from '../reducres/userSlice';

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
    try {
        const response = await axios.post('/users', user);
        console.log(response)
        toast.success(response.statusText)
    } catch (error) {
        toast.error(error)
    }
};

export const asyncLoginUser = (user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/users?email${user.email}&password=${user.password}`);
        localStorage.setItem('user', JSON.stringify(data))
    } catch (error) {
        toast.error(error)
    }
};

export const asyncLogoutUser = () => async (dispatch, getState) => {
    try {
        localStorage.clear('user', '')
    } catch (error) {
        toast.error(error)
    }
};

export const asynccurrentuser = () => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) dispatch(loaduser(user))
        else toast.error('user not found')
    } catch (error) {
        toast.error(error)
    }
};

