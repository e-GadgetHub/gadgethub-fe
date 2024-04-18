
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import { Login } from './features/login/component/Login'
import { Home } from './features/Home/component/Home'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
