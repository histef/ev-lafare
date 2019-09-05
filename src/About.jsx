import React, {useEffect} from 'react';

function About(props) {
  useEffect(()=> {
    props.handleBgColor('#8dce89')
  },[])
  
  return (
    <div className="about" style={{backgroundColor: '#8dce89', display: 'flex',  height: '100vh'}}>
      <h1 style={{width: '30%', fontSize: '4rem', letterSpacing: ".4rem"}}>ABOUT</h1>
      <div style={{width: '60%', color: '#3e3e3e', alignSelf: 'center'}}>
        <p>Ev LaFare grew up in the suburbs of the south Midwest, where he spent his days writing poems, practicing Chopin etudes, and perfecting combos on Street Fighter II. After high school, LaFare took a leap of faith in his love for words, music, and tech, and headed west for Los Angeles.</p>
        <br />
        <p>There, in a stuffy little music studio, Ev slowly forged a career for himself as a songwriter, music producer, and film composer. But despite his hard-won success, LaFare had a story to tell that couldn’t be told through music. He would spend the next eight years searching for it.</p>
        <br />
        <p>Today, half a million words later, Ev LaFare has written the book he always dreamed of writing, and has found the agent he always dreamed of finding. Represented by the inimitable Claire Friedman at Inkwell Management, Ev now prepares to bring his first YA novel to the world.</p>
      </div>
    </div>
  );
}

export default About;
