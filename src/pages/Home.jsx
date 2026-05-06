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
                Your team's time is your most expensive resource. Let's spend it better.
              </h2>
              <a href="mailto:muhammadbkamran@gmail.com" className="btn btn-primary">
                Book a Conversation
              </a>
            </div>
            <div>
              <p className="home-intro-bio">
                Most businesses have a gap between what their team spends time on and what actually
                grows the business. Manual data entry, repetitive queries, waiting on reports —
                these aren't just inefficiencies. They're costs that compound every single day.
              </p>
              <p className="home-intro-bio">
                I'm Muhammad Bin Kamran. I work with businesses to close that gap — building AI
                systems that take over the repetitive work, so your team can focus on decisions
                only humans can make. The result isn't just saved time. It's a team that handles
                more, without adding headcount.
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
                The issue isn't the technology. It's that most AI projects are built to impress
                in demos — not to survive in production. Real business data is messy. Edge cases
                appear on day two. The system that worked in testing quietly breaks when your team
                actually tries to use it.
              </p>
              <p className="identity-text">
                That gap — between a promising demo and something that actually runs — is exactly
                where most AI investments go to die. Every system I deliver is stress-tested on
                your actual data, built around your actual workflows, and monitored after launch.
                You get something that works, not something that looked good in a slide deck.
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
        description="That's usually where we start. Book a 30-minute conversation and we'll map out what's possible — and how quickly we can get you there."
      />
    </>
  )
}
