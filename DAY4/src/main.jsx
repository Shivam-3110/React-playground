import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from './App.jsx'
import './index.css'
import Wrapper from './components/Wrapper.jsx';
createRoot(document.getElementById('root')).render(
/*  <>
    <App />
    <ToastContainer position="top-center"/>
 </> */
  <Wrapper  App ={<App/>}/>
)
