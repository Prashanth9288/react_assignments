import React, { useState } from 'react';

const ColorToggleButton = () => {
   const [isGreen, setIsGreen] = useState(true);
    const toggleColor = () => {
    setIsGreen(prev => !prev);
  };

  const backgroundColor = isGreen ? 'green' : 'yellow';
  const textColor = isGreen ? 'white' : 'black';
  const colorLabel = isGreen ? 'Green' : 'Yellow';
const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button style={buttonStyle} onClick={toggleColor}>
        Color: {colorLabel}
      </button>
      <p style={{ marginTop: '20px', fontSize: '18px' }}>
        Current Color: {colorLabel}
      </p>
    </div>
  );
};

export default ColorToggleButton;