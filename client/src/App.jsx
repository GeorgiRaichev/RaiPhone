import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Add from './components/Add';
import Details from './components/Details';
import Register from './components/Register';
import Login from './components/Login';
import Error from './components/Error';
import AuthContext from './contexts/authContexts';
import * as authService from './services/authService';
import './assets/css/shop.css'
import './assets/css/bootstrap.min.css';
import './assets/css/custom.css';
import './assets/css/fontawesome.css';
import './assets/css/fontawesome.min.css';
import './assets/css/slick-theme.css';
import './assets/css/slick-theme.min.css';
import './assets/css/slick.min.css';
import './assets/css/templatemo.css';
import './assets/css/templatemo.min.css';
import './assets/css/Error.css';
import './assets/css/login.css';
import './assets/css/register.css';
import './assets/css/add.css';




function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);
    console.log(result);
    setAuth(result);
    navigate('/')
  }


  const registerSubmitHandler = async (values) => {
    if (values.password === values.confirmPassword) {
      const result = await authService.register(values.email, values.password, values.username);
      setAuth(result);
      navigate('/');
    }else{
      console.log('Not matching passwords');
    }


  }



  const [count, setCount] = useState(0)
  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.email,
  }
  return (
    <AuthContext.Provider value={values}>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<Add />} />
          <Route path="/phones/:phoneId" element={<Details />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </>
    </AuthContext.Provider>
  )
}

export default App
