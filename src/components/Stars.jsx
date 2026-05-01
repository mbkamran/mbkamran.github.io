// Generated once at module load so positions never re-randomize on re-renders
const STARS = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  animationDelay: `${(Math.random() * 5).toFixed(2)}s`,
  animationDuration: `${(3 + Math.random() * 4).toFixed(2)}s`,
  size: Math.random() > 0.8 ? '3px' : '2px',
}))

export default function Stars() {
  return (
    <div className="stars">
      {STARS.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            left: s.left,
            top: s.top,
            animationDelay: s.animationDelay,
            animationDuration: s.animationDuration,
            width: s.size,
            height: s.size,
          }}
        />
      ))}
    </div>
  )
}
