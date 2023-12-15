import { useEffect } from 'react';
import { useState } from 'react'
// import Header from "./components/Header"
import Home from './components/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {
  const [count, setCount] = useState(0)

 

  return (
    <>
    
    <Home/>
    <Footer/>
    </>
  )
}

export default App


