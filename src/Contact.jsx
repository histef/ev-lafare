import React, {useEffect, useState} from 'react';

function Contact(props) {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  
  useEffect(()=> {
    props.handleBgColor('#ed985f')
  },[])

  document.body.style.backgroundColor = "#ed985f";

  const text = 'Claire Friedman \n Inkwell Management \n 521 Fifth Ave. \n Ste. 2600 \n New York, NY 10175 \n 212.922.3500';
  
  const handleChange = () => {

  }

  const handleSubmit = () => {

  }

  const clearForm = ()=> {
    setTimeout(() => {
      document.getElementById('_replyto').value=''
      document.getElementById('message').value=''
    }, 500)
    
  }

  return (
    <div className="Contact" style={{height: '100vh'}}>
      <h1 style={{width: '30%', paddingLeft: '30px', fontSize: '4rem', letterSpacing: ".4rem"}}>CONTACT</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', position: 'absolute', top: '35%', left: '25%'}}>
        <span style={{whiteSpace: 'pre-line', width: '160px', paddingRight: '60px'}}>
          <h2 style={{fontSize: '2rem', letterSpacing: '.2rem', marginBottom: '0'}}>AGENT</h2>
          {text}
        </span>
        <span style={{whiteSpace: 'pre-line', width: '160px'}}>
          <h2 style={{fontSize: '2rem', letterSpacing: '.2rem', marginBottom: '0'}}>SAY HI</h2>
          <form action="https://formspree.io/evlafare@gmail.com" method="POST" target="_blank">
              <input id='_replyto' type="email" name="_replyto" placeholder='Email' style={{width: '150px'}} />
              <textarea id='message' name="message" placeholder='Message' style={{height: '150px', width: '150px'}} />
              <input type="submit" value="Send" onClick={clearForm} />
          </form>
        </span>
      </div>
    </div>
  );
}

export default Contact