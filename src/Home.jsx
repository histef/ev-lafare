import React, {useEffect} from 'react';

function Home(props) {
  useEffect(()=> {
    props.handleBgColor('#ffbd2c')
  },[])

  return (
    <div className="about" style={{backgroundColor: '#ffbd2c', height: '100vh', display: 'flex'}}>
      <h1 style={{fontSize: '6rem', letterSpacing: "1rem"}}>EV LAFARE</h1>
    </div>
  );
}

export default Home;