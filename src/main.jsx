import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom';
import Home from './pages/Home/index.jsx'
import Loginpages from './pages/Loginpages/index.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
        <Routes>
         <Route path ="/" element={<App />}></Route>
         <Route path='/Dashboard' element={ <Home /> }></Route>
         <Route path='/Login' element={ <Loginpages /> }></Route>
       </Routes>
      </Router>
  </StrictMode>,
)
