import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import Library from '../pages/Library';
import TvShows from '../pages/TvShows';
import Movies from '../pages/Movies';

function Mainroutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/tvshows' element={<TvShows />} />
            <Route path='/library' element={<Library />} />
        </Routes>
    )
}

export default Mainroutes