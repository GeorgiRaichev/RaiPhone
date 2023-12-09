import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Add from './components/Add/Add';
import Details from './components/Details/Details';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Error from './components/Error/Error';
import Edit from './components/Edit/Edit';

import AuthContext from './contexts/authContexts';
import * as authService from './services/authService';
import AuthGuard from './components/guards/AuthGuard';

function App() {
  const [logInMistake, setLoginMistake] = useState(null);
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');
    return {};
  });

  const loginSubmitHandler = async (values) => {
    try {
      const result = await authService.login(values.email, values.password);
      setLoginMistake(null);
      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);
      navigate('/');
    } catch (error) {
      setLoginMistake(error.message);
      console.error('Error during login:', error);
     
    }
  };

  const registerSubmitHandler = async (values) => {
    try {
      if (values.password === values.confirmPassword) {
        const result = await authService.register(values.email, values.password, values.username);
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate('/');
      } else {
        console.log('Not matching passwords');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      
    }
  };

  const logoutHandler = () => {
    try {
      setAuth({});
      localStorage.removeItem('accessToken');
    } catch (error) {
      console.error('Error during logout:', error);
      
    }
  };

  const [count, setCount] = useState(0);
  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={values}>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login message ={logInMistake}/>} />
          <Route path="/add" element={<AuthGuard><Add /></AuthGuard>} />
          <Route path="/phones/:phoneId" element={<Details />} />
          <Route path="/phones/:phoneId/edit" element={<AuthGuard><Edit /></AuthGuard>} />
          <Route path="/logout" element={<AuthGuard><Logout /></AuthGuard>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </>
    </AuthContext.Provider>
  );
}

export default App;
