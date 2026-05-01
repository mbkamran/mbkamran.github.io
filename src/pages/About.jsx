import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CTASection from '../components/CTASection'

export default function About() {
  return (
    <>
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-left">
              <span className="about-eyebrow">AI Engineer &amp; Automation Leader</span>
              <h1 className="about-hero-title">I help businesses move faster with AI.</h1>
              <p className="about-hero-desc">
                Over the past 3+ years, I've built AI systems that have eliminated thousands of
                hours of manual work, reduced operational costs by up to 40%, and helped companies
                grow without growing their teams.
              </p>
              <p className="about-hero-desc">
                My approach is simple: I don't build demos. I build production systems — tested,
                deployed, monitored, and documented. When I deliver an AI solution, it runs on day
                one and scales as your business grows.
              </p>
              <div className="hero-cta-group">
                <Link to="/case-studies" className="btn btn-primary">See My Work</Link>
                <a href="mailto:muhammadbkamran@gmail.com" className="btn">Get in Touch</a>
              </div>
            </div>
            <div className="about-hero-right">
              <ImagePlaceholder
                icon="fa-regular fa-circle-user"
                label="Professional Portrait"
                hint="Upload: high-quality professional headshot or upper-body portrait, well-lit, neutral background (600×700px)"
                className="about-photo-placeholder"
              />
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-text">
              <h3>My Story</h3>
              <p>
                I started solving real problems — a banking team drowning in support queries, a
                government institution that needed its data to speak two languages, a manufacturing
                company buried in manual data entry. Each challenge became a system. Each system
                delivered measurable ROI.
              </p>
              <p>
                What sets my work apart is that I treat AI as an engineering discipline, not a
                research experiment. I care about latency, reliability, and cost-per-query just as
                much as I care about accuracy. Production systems need to be bulletproof, and
                that's what I build.
              </p>
              <p>
                I've deployed multi-agent LLM systems, built enterprise RAG pipelines that search
                millions of documents in under a second, and created voice AI systems that bridge
                language barriers for non-technical users. Every project has one goal: make your
                business more capable than it was before.
              </p>
            </div>
            <div className="story-photo">
              <ImagePlaceholder
                icon="fa-solid fa-laptop-code"
                label="Candid / Working Photo"
                hint="Upload: candid shot at desk, presenting, or in a professional setting (600×500px)"
                className="story-photo-placeholder"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="impact-strip">
        <div className="container">
          <div className="impact-grid">
            <div>
              <div className="impact-number">40<span style={{ fontSize: '2.5rem' }}>%</span></div>
              <div className="impact-label">Average reduction in<br />operational costs across clients</div>
            </div>
            <div>
              <div className="impact-number">65<span style={{ fontSize: '2.5rem' }}>%</span></div>
              <div className="impact-label">Average improvement in<br />team productivity and throughput</div>
            </div>
            <div>
              <div className="impact-number">10<span style={{ fontSize: '2.5rem' }}>+</span></div>
              <div className="impact-label">Enterprise AI systems<br />built and deployed to production</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to work together?"
        title={<>Let's Build Your<br />Next AI System.</>}
        description="Whether you have a clear problem or just know you're wasting time on manual processes — I can help you figure out what to automate and how to do it right."
      />
    </>
  )
}
