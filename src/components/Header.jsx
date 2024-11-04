import React from 'react'
import LogoutBtnHeader from './LogoutBtnHeader'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Container from './Container'
import Logo from './Logo'

export default function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name : "Home",
      slug : '/' ,
      active : true,
    },
    {
      name  : "Login",
      slug: '/login',
      active : !authStatus
    }, 
    {
      name  : "SignUp",
      slug: '/signup',
      active : !authStatus
    },
    {
      name  : "All Post",
      slug: '/all-post',
      active : authStatus
    },
    {
      name  : "Add Post",
      slug: '/add-post',
      active : authStatus
    }
  ]
  return (
    <header className='py-3 shadow-md bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width="w-10" />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ?
            (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                  {item.name}
                </button>
              </li>
            ) : null
            )}
            {/* If authStatus true then only () will work */}
            {authStatus && (
              <li>
                <LogoutBtnHeader />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}
