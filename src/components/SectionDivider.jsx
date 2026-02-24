import React from 'react';

const SectionDivider = () => {
  return (
    <div
      style={{
        height: '1px',
        width: '100%',
        background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)',
        margin: '80px 0',
      }}
    />
  );
};

export default SectionDivider;