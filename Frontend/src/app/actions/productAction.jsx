import axios from "../../utils/axios.config"
import { toast } from 'react-hot-toast'
import { loadproduct } from "../reducers/productSlice";


export const asyncloadProducts = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("/products");
        dispatch(loadproduct(data))
    } catch (error) {
        toast.error('Products does not laoded')
    }
};



export const asyncCreateProducts = (product) => async (dispatch, getState) => {
    try {
        await axios.post("/products", product);
        dispatch(asyncloadProducts())
    } catch (error) {
        toast.error('creaton failed')
    }
};