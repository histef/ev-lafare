import React, {useEffect} from 'react';

 function Books(props) {
  useEffect(()=> {
    props.handleBgColor('#85b8cc')
  },[])

  document.body.style.backgroundColor = "#85b8cc";

  return (
    <div className="Books" style={{height: '100vh'}}>
      <h1 style={{width: '30%', paddingLeft: '30px', fontSize: '4rem', letterSpacing: ".4rem"}}>BOOKS</h1>
      <div style={{position: 'absolute', top: '45%', left: '45%'}}>
      <p>Coming Soon...</p>
      </div>
    </div>
  );
}

export default Books