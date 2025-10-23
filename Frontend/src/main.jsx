import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import store from './app/store.js'
import { Provider } from 'react-redux'



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster position='top-center' />
    </BrowserRouter>
  </Provider>
)
