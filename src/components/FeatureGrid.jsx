import React from 'react';
import './FeatureGrid.css';

const FeatureGrid = ({ features }) => {
  return (
    <div className="feature-grid">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          {feature}
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;