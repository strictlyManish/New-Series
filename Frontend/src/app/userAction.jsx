import axios from "../utils/axios.config.js"
import { loadUser } from "./reducers/userSlice.jsx";



export const asyncgetuser = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('/products');
        dispatch(loadUser(res.data))
    } catch (error) {
        console.log(error)
    }

};
