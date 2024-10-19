import React from 'react';
import { useLocation } from 'react-router-dom';

function SubmissionSuccess() {
  const location = useLocation();
  const { name, email, message } = location.state || { name: '', email: '', message: '' };

  return (
    <div>
      <h1>Thank you, {name}!</h1>
      <p>Your message has been sent successfully.</p>
      <h3>Details:</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>
  );
}

export default SubmissionSuccess;
