import React from 'react';

function About() {
  const aboutStyle = {
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
  };

  const headingStyle = {
    color: '#4A90E2',
  };

  return (
    <div style={aboutStyle}>
      <h1 style={headingStyle}>About Me</h1>
      <p>Greetings!</p>
      <p>I am currently 3rd year BSCS student at University of Cabuyao</p>
      

    </div>
  );
}

export default About;
