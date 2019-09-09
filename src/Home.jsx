import React, {useEffect} from 'react';

function Home(props) {
  useEffect(()=> {
    props.handleBgColor('#ffdb2c')
  },[])

  document.body.style.backgroundColor = "#ffdb2c";

  return (
    <div className="Home" style={{height: '100vh'}}>
      <h1 style={{fontSize: '6rem', letterSpacing: "1rem", paddingLeft: '30px'}}>EV LAFARE</h1>
    </div>
  );
}

export default Home;