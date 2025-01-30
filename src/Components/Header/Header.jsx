import React, { act } from 'react'
import {Container , Logo , LogoutBtn} from '../index.js'
import { Link, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const nevigate = useNavigate()
 
  const navItems=[
    {
      name:"Home",
      slug:'/',
      active: true
    },
    {
      name:"Login",
      slug:"/login",
      active: !authStatus
    },
    {
      name:"Signup",
      slug:'/signup',
      active: !authStatus
    },
    {
      name:"All Posts",
      slug:'/all-posts',
      active: authStatus
    },
    {
      name:"add post",
      slug:'/add-post',
      active: authStatus
    }
  ]
  return (
    <div>
      <header className='py-3 shadow bg-gray-500'>
        <Container>
          <nav className='flex'>
            <div className='mr-4'>
              <Link to='/'>
                <Logo width='70px' />
              </Link>
            </div>
            <ul className='flex ml-auto'>
              {navItems.map((item) => 
                item.active ? (
                  <li key={item.name}>
                    <button
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                     onClick={() => nevigate(item.slug)}                
                    >{item.name}</button>
                  </li>
                )  : (null)
              )}
              {authStatus && (
                <LogoutBtn />
              )}
            </ul>
          </nav>
        </Container>
      </header>
    </div>
  )
}

export default Header
