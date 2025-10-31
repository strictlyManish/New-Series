import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast"
import store from './app/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import ClickSpark from './components/ClickSpark.jsx';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <App />
      </ClickSpark>
      <Toaster position='top-right' />
    </BrowserRouter>
  </Provider>
)
