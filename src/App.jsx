import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from"./appwrite/auth"
import { login, logout } from './store/authSlice';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';


function App() {
  const [loading , setLoading]   = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if(userData){
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
      }).finally(() => setLoading(false))
  } , [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between '>
       <div className='w-full block'>
          <Header />
          <main>
            {/* <outlet /> */}
            {/* <Home/> */}
            <Outlet />
          </main>
          <Footer />
       </div>
    </div>
  ) : <h1> LOADING </h1>
}

export default App
