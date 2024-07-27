import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Experience from './components/experience/Experience';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <Experience />
      </main>
      
    </>
  );
}

export default App;
