export default function SpotlightContainer({ children, className = "" }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.015) 0%, transparent 60%)'
        }}
      />
      <div className="relative z-10 p-0.5">
        {children}
      </div>
    </div>
  )
}