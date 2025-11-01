import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function Atuhentication(props) {
    const { user } = useSelector((state) => state.useReducer);

    return user ? props.children : <Navigate to={'/login'} />

}

export default Atuhentication