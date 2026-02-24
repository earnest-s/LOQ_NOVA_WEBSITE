import React from 'react';

const SpotlightContainer = ({ children }) => {
  return (
    <div
      style={{
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          content: '',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120%',
          height: '120%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 80%)',
          zIndex: -1,
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightContainer;