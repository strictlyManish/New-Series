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

export const asyncUpdateProduct = (product) => async (dispatch, getState) => {
    try {
        await axios.patch("/products/" + product.id, product);
        dispatch(asyncloadProducts())
        toast.success('Product Updated scuessfully    ')
    } catch (error) {
        toast.error('update failed')
    }
};

export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
    try {
        await axios.delete('/products/' + id);
        dispatch(asyncloadProducts())
        toast.success('Product Deleted sucessfully')
    } catch (error) {
        toast.error('Deletion failed')
    }
};