import React, {useState, useEffect, Fragment} from 'react';
import { Route } from "react-router-dom";
import './App.css';
import EVLF_animation_2D from './EVLF_animation_2D.mp4';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Books from './Books';
import Navbar from './Navbar';

function App() {
  const [bgColor, setBGColor] = useState('#ffbd2c');
  const [goToHomePage, setGoToHomePage] = useState(true);

  // useEffect(()=> {
  //   setTimeout(() => setGoToHomePage(true), 7000)
  // },[])

  const handleBgColor = (color) => {
    setBGColor(color)
  }

  return ( 
    <div className="App" style={{display: 'flex',  height: '100vh', width: '100vw'}}>
    {goToHomePage ?
      (<Fragment>
        <main style={{width: '90%', backgroundColor: `${bgColor}`, paddingLeft: "30px"}}>
        <Navbar />
          <Route exact path='/' render={(props) => <Home handleBgColor={handleBgColor}/>} />
          <Route exact path='/about' render={(props) => <About handleBgColor={handleBgColor}/>} />
          <Route exact path='/books' render={(props) => <Books handleBgColor={handleBgColor}/>}  />
          <Route exact path='/contact' render={(props) => <Contact handleBgColor={handleBgColor}/>}  />
        </main>
        <section style={{width: '10%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', backgroundColor: `${bgColor}` }}>
          <i className="fab fa-instagram fa-3x" style={{width: '100%'}}></i>
          <i className="fab fa-twitter fa-3x" style={{width: '100%'}}></i>
          <i className="fab fa-twitch fa-3x" style={{width: '100%', paddingBottom: '100px'}}></i>
        </section>
      </Fragment>)
      : (<video width="100%" height="100%" muted autoPlay>
          <source src={EVLF_animation_2D} type="video/mp4"></source>
        </video>)
      }
    </div>
  );
}

export default App;
