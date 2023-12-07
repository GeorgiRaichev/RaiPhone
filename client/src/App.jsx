import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
  const [auth, setAuth] = useState({});
  const loginSubmitHandler = (values) => {
    console.log(values);
  }
  const [count, setCount] = useState(0)

  return (
    <AuthContext.Provider value={{loginSubmitHandler}}>
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
