import toast, { Toaster } from 'react-hot-toast';
import axios from "../../utils/axios.config";
import { loaduser } from '../reducers/userSlice';

export const asyncRegisterUser = (user) => async (dispatchEvent, getState) => {
    try {
        const response = await axios.post('/users', user);
        toast.success('Registrion scucessfull')
    } catch (error) {
        toast.error('Error during registrations')
    }
};

export const asyncLoginUser = (user) => async (dispatchEvent, getState) => {
    try {
        const { data } = await axios.get(`/users?${user.email}&password=${user.password}`);

        if (data.length > 0) {
            localStorage.setItem('user', JSON.stringify(data))
            toast.success('user Logged In')
        }

    } catch (error) {
        toast.error('Error durin logged in')
    }
};


export const asyncLogOutUser = () => {
    try {
        localStorage.setItem('user', '')
    } catch (error) {
        console.log(error)
    }
};


export const asyncGetCurrentUser = () => async (dispatchEvent, getState) => {
    try {
        const user = JSON.parse((localStorage.getItem('user')))
        if (user) {
            dispatchEvent(loaduser(user))
        } else {
            console.log('user not found')
        }
    } catch (error) {
        toast.error('Error durin logged in')
    }
};