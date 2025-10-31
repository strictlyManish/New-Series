import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function Atuhente(props) {
    const { user } = useSelector((state) => state.useReducer);

    return user ? props.children : <Navigate to={'/login'} />
}

export default Atuhente