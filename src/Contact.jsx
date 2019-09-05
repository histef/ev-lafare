import React, {useEffect} from 'react';

function Contact(props) {
  useEffect(()=> {
    props.handleBgColor('#ed985f')
  },[])

  const text = 'Claire Friedman \n Inkwell Management \n 521 Fifth Ave., Ste. 2600\n New York, NY 10175 \n212.922.3500';

  return (
    <div className="about" style={{backgroundColor: '#ed985f', display: 'flex', height: '100vh'}}>
      <h1 style={{width: '30%', fontSize: '4rem', letterSpacing: ".4rem"}}>CONTACT</h1>
      <div style={{width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '42px'}}>
        <h2 style={{fontSize: '2rem', letterSpacing: ".2rem", marginBottom: 0}}>AGENT</h2>
        <p style={{whiteSpace: "pre-line"}}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default Contact