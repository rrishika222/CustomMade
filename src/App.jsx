import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import { Home, Contact, Catelouge } from './components/pages/index';
import SignUp from './components/pages/SignUp';
import authService from "./appwrite/auth"
import SignIn from './components/pages/SignIn';
import Form from './components/pages/Form';
import Confirmation from './components/pages/confirmation';
import { useDispatch } from 'react-redux'
import {login, logout} from "./store/authSlice"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <div className='App '>
        <div className='w-full'>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/catelouge' element={<Catelouge/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/SignIn' element={<SignIn/>}></Route>
            <Route path='/SignUp' element={<SignUp/>}></Route>
            <Route path='/Form' element={<Form/>}></Route>
            <Route path='/confirmation' element={<Confirmation/>}></Route>
          </Routes>
        </div>
       
      </div>
    </>
  )
}

export default App
