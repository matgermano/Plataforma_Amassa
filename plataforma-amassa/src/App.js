import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Opcoes from './components/Opcoes/Opcoes'
import Footer from './components/Footer/Footer'
import './index.css';

function App() {
  return (
    <div className="App">
    <Navbar/> 
    <Banner/>
    <Opcoes/>
    <Footer/>
    
    </div>   
  );
}

export default App;
