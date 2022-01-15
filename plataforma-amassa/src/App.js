import {React, useState, useEffect} from "react";
// import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Opcoes from "./components/Opcoes/Opcoes";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";
import "./index.css";
import ModalEndereço from "./components/Modal/ModalEndereço";
import ModalCarrinho from "./components/Modal/ModalCarrinho";
import Animacao from "./components/Animacao/animacao.js";

function App() {
  // useEffect(()=>{
  //   axios.get('https://amassapi.herokuapp.com/pratos-principais')
  //   .then((response)=>{
  //     const chama= []
  //     console.log(response);
  //   }) .catch((error)=>{
  //     console.log(error);
  //   })

  // });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  return (
    <>
      <Navbar setIsOpen={setIsModalVisible} setIsOpen2={setIsModalVisible2} />

      <Banner />

      <Opcoes />
      <Cards/>
      <Footer />
      {isModalVisible ? (
        <ModalEndereço setIsModalVisible={setIsModalVisible} />
      ) : null}
      {isModalVisible2 ? (
        <ModalCarrinho setIsModalVisible2={setIsModalVisible2} />
      ) : null}
    </>
  );
}

export default App;
