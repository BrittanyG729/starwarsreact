// src/components/StarshipCard.jsx
import React from 'react';

const StarshipCard = ({ starship }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
    <h3>{starship.name}</h3>
  </div>
);

export default StarshipCard;