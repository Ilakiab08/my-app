
import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', margin: '16px' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
