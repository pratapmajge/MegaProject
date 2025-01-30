import { useEffect, useState } from 'react'
import {useDispatch ,useSelector} from "react-redux"
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import './App.css'
import AuthService from './appwrite/auth.js';
import { login , logout } from './store/authSlice';
import authservice from './appwrite/auth.js'
import {Outlet} from 'react-router-dom'

function App() {

  const [loading , setLoading]= useState(true);
  const dispatch = useDispatch();

  useEffect(()=> {
    authservice.getCurrentUser()
    .then( (userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally( () => setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO <Outlet />
        </main>
        <Footer /> 
      </div>
    </div>
  )  :  null
  
}

export default App
