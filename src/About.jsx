import React, {useEffect} from 'react';
import Ev_aboutpic1_500px from './Ev_aboutpic1_500px.jpg';

function About(props) {
  useEffect(()=> {
    props.handleBgColor('#8dce89')
  },[])
  
  document.body.style.backgroundColor = "#8dce89";

  return (
    <div className="About" style={{height: '100vh'}}>
      <h1 style={{width: '30%', minWidth: '300px', marginBottom: '0', paddingLeft: '30px', fontSize: '4rem', letterSpacing: ".4rem"}}>ABOUT</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', position: 'absolute', top: '35%', left: '25%', color: '#3e3e3e'}}>
          <img src={Ev_aboutpic1_500px} style={{zIndex: '1', height: '300px'}}></img>
          <p style={{width: '215px', paddingLeft: '20px'}}>Ev LaFare spent his early years in the south Midwest scribbling poems, practicing Rachmaninoff preludes, and perfecting combos in <i>Street Fighter II</i>. After relocating to Los Angeles, Ev found success as a songwriter and music producer. Since then, LaFare has switched his focus to writing. Between sessions, shows, (and games of <i>Overwatch</i>), his first YA novel was born.</p>
      </div>
    </div>
  );
}

export default About;
