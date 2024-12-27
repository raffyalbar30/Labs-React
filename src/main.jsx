import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom';
import Home from './pages/Home/index.jsx'
import Loginpages from './pages/Loginpages/index.jsx'
import { PrivateComponents } from './libs/auth/auth.jsx'
import Userpages from './pages/Userpages/userpages.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
        <Routes>
         <Route path ="/" element={<Userpages />}></Route>
         <Route  element={<PrivateComponents/>}>
            <Route path='/Dashboard' element={ <Home /> }></Route>
         </Route>
         <Route path='/Login' element={ <Loginpages /> }></Route>
       </Routes>
      </Router>
  </StrictMode>,
)
