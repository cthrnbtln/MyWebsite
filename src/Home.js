import React from 'react';

function Home() {
  const homeStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#eaf4fc',
  };

  const headingStyle = {
    fontSize: '3rem',
    color: '#4A90E2',
  };

  const textStyle = {
    fontSize: '1.5rem',
    marginTop: '20px',
    color: '#333',
  };

  return (
    <div style={homeStyle}>
      <h1 style={headingStyle}>Welcome to My Profile!</h1>
      <p style={textStyle}>Dangal Greetings, I am Catherine!</p>
      <p style={textStyle}>If you'd like to know more about me, feel free to click the buttons above! I'm excited to share more with you!</p>
    </div>
  );
}

export default Home;
