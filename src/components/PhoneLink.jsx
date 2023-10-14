import React from 'react';

const PhoneLink = ({ phoneNumber }) => {
  const telLink = `tel:${phoneNumber}`;

  return (
    <a href={telLink} style={{color: 'white'}}>
      {phoneNumber}
    </a>
  );
};

export default PhoneLink;
