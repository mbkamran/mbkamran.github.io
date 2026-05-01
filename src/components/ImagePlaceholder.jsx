export default function ImagePlaceholder({ icon = 'fa-regular fa-image', label, hint, style, className = '' }) {
  return (
    <div className={`img-placeholder ${className}`} style={style}>
      <i className={icon} />
      {label && <p className="img-placeholder-label">{label}</p>}
      {hint && <p className="img-placeholder-hint">{hint}</p>}
    </div>
  )
}
