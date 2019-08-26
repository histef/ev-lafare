import React, {useEffect} from 'react';

 function Books(props) {
  useEffect(()=> {
    props.handleBgColor('#85b8cc')
  },[])

  return (
    <div className="about" style={{backgroundColor: '#85b8cc', height: '100vh', display: 'flex'}}>
      <h1 style={{width: '30%', fontSize: '4rem', letterSpacing: ".4rem"}}>BOOKS</h1>
      <p style={{width: '60%', justifySelf: 'center', alignSelf: 'center', textAlign: 'center'}}>Coming Soon</p>
    </div>
  );
}

export default Books