import React from "react";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import MainContainer from "./components/MainContainer/MainContainer";
import Footer from "./components/Footer/Footer";

import "../src/components/Style/General.css";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <MainContainer />
      <Footer />
    </>
  );
}

export default App;
