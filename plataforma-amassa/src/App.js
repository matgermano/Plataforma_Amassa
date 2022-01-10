import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Opcoes from './components/Opcoes/Opcoes'
import './index.css';

function App() {
  return (
    <div className="App">
    <Navbar/> 
    <Banner/>
    <Opcoes/>
    
    </div>   
  );
}

export default App;
