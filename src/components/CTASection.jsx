export default function CTASection({ eyebrow, title, description }) {
  return (
    <section className="cta-section">
      <div className="container">
        <span className="cta-eyebrow">{eyebrow}</span>
        <h2 className="cta-title">{title}</h2>
        <p className="cta-desc">{description}</p>
        <a
          href="mailto:muhammadbkamran@gmail.com"
          className="btn btn-primary"
          style={{ fontSize: '1rem', padding: '0.9rem 2.2rem' }}
        >
          Contact
        </a>
      </div>
    </section>
  )
}
