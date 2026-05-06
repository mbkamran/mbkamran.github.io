import { Link } from 'react-router-dom'

import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <>
      {/* Full-viewport hero with photo overlay */}
      <section className="home-hero">
        <div className="home-hero-bg">
          <img src="/assets/images/home-hero-portrait.jpg" alt="Muhammad Bin Kamran" />
        </div>
        <div className="container">
          <div className="home-hero-text-box">
            <p className="home-hero-tagline">
              "The work your team is doing manually today — AI can handle it better."
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
                Your team's time is your most expensive resource. Most of it goes to work that shouldn't need them.
              </h2>
              <a href="mailto:muhammadbkamran@gmail.com" className="btn btn-primary">
                Contact
              </a>
            </div>
            <div>
              <p className="home-intro-bio">
                In almost every organisation, there's a gap between what the team spends their day
                on and what actually moves the business forward. Manual data entry, repetitive
                queries, waiting on reports — these aren't just inefficiencies. They're costs that
                compound quietly, every single day.
              </p>
              <p className="home-intro-bio">
                I'm Muhammad, and over several years working with businesses across banking,
                government, and manufacturing, I've watched this same pattern repeat itself. The
                work consuming most of the team's day is almost never the work that actually needs
                them. When the right system takes it over, the team doesn't just get faster —
                they get their job back.
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
              <div className="credibility-label">AI systems running<br />in production</div>
            </div>
            <div className="credibility-item">
              <div className="credibility-stat">3+</div>
              <div className="credibility-label">Years of enterprise<br />AI deployments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Identity section 1 — photo left, text right */}
      <section style={{ padding: 0 }}>
        <div className="container">
          <div className="identity-section">
            <div>
              <img 
                src="/assets/images/prototype_1.png" 
                alt="Working Environment" 
                className="identity-img-placeholder" 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <div>
              <span className="identity-eyebrow">The Real Problem</span>
              <h2 className="identity-title">
                Most AI Projects Fail Before They Start
              </h2>
              <p className="identity-text">
                The issue is rarely the technology. Most AI projects are built to impress in
                demos — not to survive in production. Real business data is messy. The edge
                cases that don't show up in testing show up on day two. The system that looked
                impressive in the pilot quietly breaks when the team actually tries to use it.
              </p>
              <p className="identity-text">
                That gap — between a promising demo and something that actually runs — is where
                most AI investments go to die. The ones that survive have one thing in common:
                they were designed around how the business actually operates, not how it looked
                in a requirements document. That distinction is everything.
              </p>
              <Link to="/case-studies" className="btn" style={{ marginTop: '0.5rem' }}>
                See Real Results
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
              <span className="identity-eyebrow">What Changes</span>
              <h2 className="identity-title">
                What Your Business Looks Like on the Other Side
              </h2>
              <p className="identity-text">
                A bank's support team that was answering the same questions 200 times a day now
                handles 65% more queries — without adding a single person. A government
                department where staff used to wait days for data reports now pulls their own
                data by voice, in Urdu or English, in seconds.
              </p>
              <p className="identity-text">
                A manufacturing company's purchase order cycle that used to take 3 days now
                completes in under 4 hours — automatically, with zero errors. Each situation is
                different, but the outcome is always the same: your team does more with what
                they already have.
              </p>
              <Link to="/about" className="btn" style={{ marginTop: '0.5rem' }}>
                My Story
              </Link>
            </div>
            <div>
              <img 
                src="/assets/images/prototype_2.png" 
                alt="Client Meeting" 
                className="identity-img-placeholder" 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready?"
        title={<>What's the Most Expensive Thing<br />Your Team Does Manually?</>}
        description="That's usually the highest-leverage place to start. If you can name the task, you've already identified the opportunity."
      />
    </>
  )
}
