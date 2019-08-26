import React, {useState, useEffect} from 'react';
import { Route } from "react-router-dom";
import './App.css';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Books from './Books';
import Navbar from './Navbar';

function App() {
  const [bgColor, setBGColor] = useState('#ffbd2c')

  useEffect(()=>{
    console.log(bgColor)
  })

  const handleBgColor = (color) => {
    setBGColor(color)
  }

  return ( 
    <div className="App" style={{display: 'flex',  height: '100vh', width: '100vw'}}>
      <main style={{width: '90%', backgroundColor: `${bgColor}`, paddingLeft: "30px"}}>
      <Navbar />
        <Route exact path='/' render={(props) => <Home handleBgColor={handleBgColor}/>} />
        <Route exact path='/about' render={(props) => <About handleBgColor={handleBgColor}/>} />
        <Route exact path='/books' render={(props) => <Books handleBgColor={handleBgColor}/>}  />
        <Route exact path='/contact' render={(props) => <Contact handleBgColor={handleBgColor}/>}  />
      </main>
      <section style={{width: '10%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', backgroundColor: `${bgColor}` }}>
        <i class="fab fa-twitter fa-3x" style={{width: '100%'}}></i>
        <i class="fab fa-instagram fa-3x" style={{width: '100%'}}></i>
        <i class="fab fa-twitch fa-3x" style={{width: '100%', paddingBottom: '100px'}}></i>
      </section>
    </div>
  );
}

export default App;
