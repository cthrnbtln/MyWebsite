import React from 'react';

function Skills() {
  const skillsStyle = {
    backgroundColor: '#f0f0f0',
    padding: '10%',
    borderRadius: '10px',
    marginTop: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const listStyle = {
    listStyleType: 'none',
    paddingLeft: '0',
    textAlign: 'center',
  };

  const listItemStyle = {
    fontSize: '1.2rem',
    padding: '10px',
    backgroundColor: '#fff',
    margin: '5px 0',
    borderRadius: '5px',
  };

  return (
    <div style={skillsStyle}>
      <h1 style={{ textAlign: 'center', color: '#4A90E2', fontSize: '2.5rem' }}>My Skills</h1>
      <ul style={{listStyle: 'cricle,' ,color: 'ff3399', fontSize: '1.2rem'}}>
        <li style={listItemStyle}>Athletic Prowess</li>
        <li style={listItemStyle}>Problem-Solving</li>
        <li style={listItemStyle}>Photography</li>
        <li style={listItemStyle}>Cooking or Baking</li>
        <li style={listItemStyle}>Social Skills</li>
      </ul>
    </div>
  );
}

export default Skills;
