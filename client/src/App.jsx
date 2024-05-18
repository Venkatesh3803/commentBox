
import HomePage from './pages/HomePage'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Addpost from './pages/Addpost'
import { useContext } from 'react'
import { AuthContext } from './context/Context'

function App() {

  const { currUser } = useContext(AuthContext)



  return (
    <>
      <Routes>
        <Route path='/' element={currUser ? <HomePage /> : <Navigate to={"/login"} />} />
        <Route path='/addpost' element={currUser ? <Addpost /> : <Navigate to={"/login"} />}  />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
