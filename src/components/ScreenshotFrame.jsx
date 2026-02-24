import React from 'react';

const ScreenshotFrame = ({ src, alt, annotation }) => (
  <div className="screenshot-frame">
    <img src={src} alt={alt} loading="lazy" className="screenshot-img" />
    {annotation && (
      <span className="annotation-label">{annotation}</span>
    )}
  </div>
);

export default ScreenshotFrame;
