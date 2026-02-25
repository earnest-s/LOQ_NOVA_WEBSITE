export default function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-20 relative z-10">
      <div
        className="w-full max-w-7xl h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)'
        }}
      />
    </div>
  )
}