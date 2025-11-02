import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { MoviesContext } from './context/MoviesContex';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MoviesContext >
      <App />
    </MoviesContext>
  </BrowserRouter>
)
