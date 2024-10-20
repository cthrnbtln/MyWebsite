import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const formStyle = {
    maxWidth: '90%', // Use percentage for mobile
    margin: '20px auto',
    padding: '10%',
    borderRadius: '10px',
    backgroundColor: '#f2f2f2',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/submission-success', { state: { name, email, message } });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ ...inputStyle, height: '100px' }}
          ></textarea>
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4A90E2', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
