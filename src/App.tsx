
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Register } from './features/register/component/Register'
import { Login } from './features/login/component/Login'
import { Home } from './features/Home/component/Home'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
    </>
  )
}

export default App
