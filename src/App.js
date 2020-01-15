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
  const [goToHomePage, setGoToHomePage] = useState(false);

  useEffect(()=> {
    setTimeout(() => setGoToHomePage(true), 7000)
  },[])

  const handleBgColor = (color) => {
    setBGColor(color)
  }

  return ( 
    <div className="App" style={{display: 'flex'}}>
    {goToHomePage ?
      (<Fragment>
        <main style={{minWidth: '90%'}}>
          <Navbar />
            <Route exact path='/' render={(props) => <Home handleBgColor={handleBgColor}/>} />
            <Route exact path='/about' render={(props) => <About handleBgColor={handleBgColor}/>} />
            <Route exact path='/books' render={(props) => <Books handleBgColor={handleBgColor}/>}  />
            <Route exact path='/contact' render={(props) => <Contact handleBgColor={handleBgColor}/>}  />
        </main>
        <section style={{width: '10%', position: 'fixed', right: '0px', bottom: '20px', backgroundColor: `${bgColor}`}}>
          <a href="http://www.instagram.com/evlafare" target="_blank"><i className="fab fa-instagram fa-3x" style={{width: '100%', textDecoration: "none", color: 'black'}}></i></a>
          <a href="https://www.youtube.com/channel/UCs0ZklNQ0LsoeVCoD2PzFAQ" target="_blank"><i class="fab fa-youtube" style={{width: '100%', textDecoration: "none", color: 'black'}}></i></a>          
          <a href="http://www.twitter.com/evlafare" target="_blank"><i className="fab fa-twitter fa-3x" style={{width: '100%', textDecoration: "none", color: 'black'}}></i></a>
          <a href="http://www.twitch.tv/evlafare" target="_blank"><i className="fab fa-twitch fa-3x" style={{width: '100%', textDecoration: "none", color: 'black'}}></i></a>
        </section>
      </Fragment>)
      : (<div style={{height: '100vh', backgroundColor: '#ffdb2c'}}><video style={{height: '100%', width: '100%'}} muted autoPlay>
          <source src={EVLF_animation_2D} type="video/mp4"></source>
        </video></div>)
       
      }
    </div>
  );
}

export default App;
