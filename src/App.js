import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Features from './components/features/features';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <main>
      <Hero></Hero>
      <Features></Features>
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
