import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style.css"
import Box from './Box'
import SalesApp from './SalesApp'
import EffectClass from './EffectClass'
import FetchingData from './FetchingData'
import FetchMore from './FetchMore'
import FetchMore2 from './FetchMore2'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import About from './About'
import Header from './Header'
import UserDashboard from './UserDashboard'
import AdminDash from './AdminDash'
import ContextHolder from './ContextHolder'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextHolder>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user-d' element={<UserDashboard/>}/>
        <Route path='/admin-d' element={<AdminDash/>}/>
      </Routes>
      </BrowserRouter>
    </ContextHolder>
  </StrictMode>,
)
