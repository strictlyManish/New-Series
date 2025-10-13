import { toast } from 'react-hot-toast';
import axios from '../../api/axiosconfig';

export const asyncRegisteruser = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.post('/users', user);
        toast.success("user registered");
    } catch (error) {
        toast.error("user not registered");
    }
}