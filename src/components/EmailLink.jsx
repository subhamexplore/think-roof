import React from 'react';

const EmailLink = ({ email }) => {
  const mailtoLink = `mailto:${email}`;

  return (
    <a href={mailtoLink} target="_blank" style={{color: 'white'}} rel="noopener noreferrer">
      {email}
    </a>
  );
};

export default EmailLink;
