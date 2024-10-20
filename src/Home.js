import React from 'react';

function Home() {
  const homeStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#eaf4fc',
    padding: '10%', // Added padding for mobile
  };

  const headingStyle = {
    fontSize: '2.5rem', // Adjusted for mobile
    color: '#4A90E2',
  };

  const textStyle = {
    fontSize: '1.2rem', // Adjusted for mobile
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
