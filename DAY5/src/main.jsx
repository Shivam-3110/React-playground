
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Wrapper from './components/Wrapper.jsx'

createRoot(document.getElementById('root')).render(
  <Wrapper>
<BrowserRouter> 

 <App />

</BrowserRouter>
  </Wrapper>
   
  
)
