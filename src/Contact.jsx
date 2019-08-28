import React, {useEffect} from 'react';

function Contact(props) {
  useEffect(()=> {
    props.handleBgColor('#ed985f')
  },[])

  return (
    <div className="about" style={{backgroundColor: '#ed985f', display: 'flex'}}>
      <h1 style={{width: '30%', fontSize: '4rem', letterSpacing: ".4rem"}}>CONTACT</h1>
      <div style={{width: '60%'}}>
        <h2 style={{fontSize: '2rem', letterSpacing: ".4rem"}}>AGENT</h2>
        <p><strong>Claire Friedman</strong>
             Inkwell Management
             521 Fifth Ave., Ste. 2600
              New York, NY 10175
             212.922.3500
        </p>
      </div>
    </div>
  );
}

export default Contact