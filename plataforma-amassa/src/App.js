import {React, useState, useEffect} from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Opcoes from "./components/Opcoes/Opcoes";
import Footer from "./components/Footer/Footer";
import "./index.css";
import ModalEndereço from "./components/Modal/ModalEndereço";
import ModalCarrinho from "./components/Modal/ModalCarrinho";


function App() {

  // REQUISIÇÃO DE API AMASSA
  // useEffect(()=>{
  //   axios.get('https://chat-app-karlla.herokuapp.com/users')
  //   .then((response)=>{
  //     alert(response);
  //   }) .catch((error)=>{
  //     alert(error);
  //   }) 

  // });


  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  return (
    <>
      <Navbar setIsOpen={setIsModalVisible} setIsOpen2={setIsModalVisible2}/>
      <Banner />
      <Opcoes />
      <Footer />
      {isModalVisible ? <ModalEndereço setIsModalVisible={setIsModalVisible} /> : null}
      {isModalVisible2 ? <ModalCarrinho setIsModalVisible2={setIsModalVisible2} /> : null}
    </>
  );
}

export default App;
