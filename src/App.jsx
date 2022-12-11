import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Header, Home, About, Contact, Footer } from "./components";

const App = () => {
  const [scroll, setScroll] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
