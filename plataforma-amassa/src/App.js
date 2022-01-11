import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Opcoes from "./components/Opcoes/Opcoes";
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Opcoes />
      <Footer />
    </>
  );
}

export default App;
