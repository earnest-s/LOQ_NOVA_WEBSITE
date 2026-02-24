import React from 'react'

// Lazy-load images for performance
const ScreenshotFrame = ({ src, alt, annotation, children }) => (
  <div className="relative flex flex-col items-center justify-center screenshot-frame">
    <div className="relative w-full">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="screenshot-img"
      />
      {annotation && (
        <span className="absolute top-2 left-3 text-xs font-mono-code text-white/70 bg-[#0B0F14]/80 px-2 py-0.5 rounded-md annotation-label">
          {annotation}
        </span>
      )}
      {children}
    </div>
  </div>
)

export default ScreenshotFrame
