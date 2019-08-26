import React, {useEffect} from 'react';

function Contact(props) {
  useEffect(()=> {
    props.handleBgColor('#ed985f')
  },[])

  return (
    <div className="about" style={{backgroundColor: '#ed985f'}}>
      <h1 style={{fontSize: '4rem', letterSpacing: ".4rem"}}>CONTACT</h1>
    </div>
  );
}

export default Contact