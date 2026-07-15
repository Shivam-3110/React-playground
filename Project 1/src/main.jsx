
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import{BrowserRouter} from 'react-router-dom'
import {ToastContainer} from 'toastify'
import {store} from './store/Store.jsx'
import {Provider} from 'react-redux'


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Provider store={store}>
  <App />
 </Provider>
  
    <ToastContainer />
  </BrowserRouter>
)
