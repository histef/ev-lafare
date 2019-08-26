import React, {useEffect} from 'react';

function Home(props) {
  useEffect(()=> {
    props.handleBgColor('#ffbd2c')
  },[])

  return (
    <div className="Home">
      <h1 style={{fontSize: '8rem', letterSpacing: "1rem"}}>EV LAFARE</h1>
    </div>
  );
}

export default Home;