import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <>
      {/* Full-viewport hero with photo overlay */}
      <section className="home-hero">
        <div className="home-hero-bg">
          <ImagePlaceholder
            icon="fa-regular fa-circle-user"
            label="Full-Width Professional Portrait"
            hint="Upload a high-resolution portrait (1600×900px or taller). This fills the entire screen."
          />
          {/* Replace ImagePlaceholder with:
              <img src="/assets/images/hero-bg.jpg" alt="Muhammad Bin Kamran" />
              once the photo is ready */}
        </div>
        <div className="container">
          <div className="home-hero-text-box">
            <p className="home-hero-tagline">
              "The future of your business depends on the AI systems you build today."
            </p>
          </div>
        </div>
      </section>

      {/* Intro — 2 column below hero */}
      <section style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="container">
          <div className="home-intro">
            <div>
              <h2 className="home-intro-headline">
                AI Engineer building systems that actually run in production.
              </h2>
              <a href="mailto:muhammadbkamran@gmail.com" className="btn btn-primary">
                Book a Conversation
              </a>
            </div>
            <div>
              <p className="home-intro-bio">
                I'm Muhammad Bin Kamran — an AI Engineer specializing in systems that eliminate
                manual work and scale with your business. Not demos. Not prototypes. Production AI
                that runs on day one, monitored, documented, and built to last.
              </p>
              <p className="home-intro-bio">
                Over 3+ years I've built enterprise RAG systems, agentic workflow automations, and
                voice AI tools for clients across banking, government, and manufacturing — each
                delivering measurable cost savings and productivity gains.
              </p>
              <Link to="/about" className="btn" style={{ marginTop: '1.5rem' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="credibility-strip" style={{ padding: 0 }}>
        <div className="container">
          <div className="credibility-grid">
            <div className="credibility-item">
              <div className="credibility-stat">40%</div>
              <div className="credibility-label">Average reduction in<br />operational costs</div>
            </div>
            <div className="credibility-item">
              <div className="credibility-stat">65%</div>
              <div className="credibility-label">Improvement in team<br />productivity</div>
            </div>
            <div className="credibility-item">
              <div className="credibility-stat">10+</div>
              <div className="credibility-label">AI systems in<br />production</div>
            </div>
            <div className="credibility-item">
              <div className="credibility-stat">3+</div>
              <div className="credibility-label">Years building<br />enterprise AI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Identity section 1 — photo left, text right */}
      <section style={{ padding: 0 }}>
        <div className="container">
          <div className="identity-section">
            <div>
              <ImagePlaceholder
                icon="fa-solid fa-laptop-code"
                label="Working / Speaking Photo"
                hint="Upload: candid shot at a desk, presenting at a conference, or in a professional environment (800×600px)"
                className="identity-img-placeholder"
              />
            </div>
            <div>
              <span className="identity-eyebrow">Engineering Philosophy</span>
              <h2 className="identity-title">
                The Engineer Behind Enterprise AI
              </h2>
              <p className="identity-text">
                Most AI projects fail not because the model was wrong, but because the system
                wasn't built to survive production. I've spent 3+ years studying exactly how
                enterprise AI breaks down — and building systems that don't.
              </p>
              <p className="identity-text">
                Every system I deliver is tested under load, documented for handoff, and monitored
                in production. I care about latency, reliability, and cost-per-query as much as I
                care about model accuracy. Because a great demo that fails at scale isn't a
                system — it's a liability.
              </p>
              <Link to="/case-studies" className="btn" style={{ marginTop: '0.5rem' }}>
                See My Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Identity section 2 — text left, photo right */}
      <section style={{ padding: 0 }}>
        <div className="container">
          <div className="identity-section">
            <div>
              <span className="identity-eyebrow">Track Record</span>
              <h2 className="identity-title">
                Trusted Across Banking, Government, and Manufacturing
              </h2>
              <p className="identity-text">
                Clients come to me when they've outgrown spreadsheets and manual processes. A
                banking team in the Middle East cut their query resolution time by 65%. A
                government institution gave non-technical staff direct access to their own data —
                in Urdu and English, by voice.
              </p>
              <p className="identity-text">
                A manufacturing company reduced a 3-day purchase order cycle to under 4 hours —
                with zero data entry errors since deployment. Each engagement is different, but
                the outcome is always the same: your team does more, with less effort, and the
                system runs itself.
              </p>
              <Link to="/about" className="btn" style={{ marginTop: '0.5rem' }}>
                About Me
              </Link>
            </div>
            <div>
              <ImagePlaceholder
                icon="fa-solid fa-handshake"
                label="Client / Team Photo"
                hint="Upload: photo from a client meeting, team workshop, or professional event (800×600px)"
                className="identity-img-placeholder"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to get started?"
        title={<>Let's Eliminate Your<br />Most Expensive Manual Process.</>}
        description="Tell me what's slowing your team down. I'll tell you what's possible — and how fast we can get there."
      />
    </>
  )
}
