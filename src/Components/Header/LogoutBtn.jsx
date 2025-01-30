import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authservice.logout()
        .then(() => {
            dispatch(logout())
        })

    }
  return (
    <div>
      <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full'>Logout</button>
    </div>
  )
}

export default LogoutBtn
