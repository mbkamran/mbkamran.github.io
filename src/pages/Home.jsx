import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="home-hero">
        <div className="container">
          <div className="home-hero-inner">
            <div>
              <span className="hero-eyebrow">AI Engineer &amp; Automation Expert</span>
              <h1 className="home-hero-heading">
                <span className="line-1">Enterprise AI</span>
                <span className="line-2">That Actually</span>
                <span className="line-3">Ships.</span>
              </h1>
              <p className="home-hero-tagline">
                I build production-ready AI systems that eliminate manual work, reduce operational costs,
                and scale with your business — not just impressive demos that live in a Jupyter notebook.
              </p>
              <div className="hero-cta-group">
                <a href="mailto:muhammadbkamran@gmail.com" className="btn btn-primary">Book a Conversation</a>
                <Link to="/case-studies" className="btn">See My Work</Link>
              </div>
            </div>
            <div className="home-hero-photo">
              <div className="profile-photo-wrap">
                <ImagePlaceholder
                  icon="fa-regular fa-circle-user"
                  label="Professional Headshot"
                  hint="Upload: professional portrait, well-lit, dark/neutral background (600×700px)"
                  style={{ minHeight: '420px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="credibility-strip">
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

      {/* What I Do */}
      <section>
        <div className="container">
          <span className="hero-eyebrow">What I Do</span>
          <h2>AI Systems Built for the Real World</h2>
          <div className="role-cards-grid">
            <div className="role-card">
              <div className="role-card-img-wrap">
                <ImagePlaceholder
                  icon="fa-solid fa-diagram-project"
                  label="Workflow Automation Visual"
                  hint="Abstract diagram or screenshot showing automated pipeline (800×450px)"
                />
              </div>
              <div className="role-card-body">
                <div className="role-card-icon"><i className="fa-solid fa-gears" /></div>
                <h3 className="role-card-title">AI Workflow Automation</h3>
                <p className="role-card-desc">
                  Multi-agent systems that replace repetitive human tasks — from email processing and
                  data entry to ERP integration and report generation. Built with LangGraph and FastAPI.
                </p>
              </div>
            </div>
            <div className="role-card">
              <div className="role-card-img-wrap">
                <ImagePlaceholder
                  icon="fa-solid fa-magnifying-glass-chart"
                  label="RAG System Architecture"
                  hint="Architecture diagram or chatbot UI screenshot (800×450px)"
                />
              </div>
              <div className="role-card-body">
                <div className="role-card-icon"><i className="fa-solid fa-database" /></div>
                <h3 className="role-card-title">Enterprise RAG Systems</h3>
                <p className="role-card-desc">
                  Production-grade retrieval-augmented generation pipelines that search millions of documents
                  in under a second — deployed on Azure, AWS, or GCP with full compliance controls.
                </p>
              </div>
            </div>
            <div className="role-card">
              <div className="role-card-img-wrap">
                <ImagePlaceholder
                  icon="fa-solid fa-microphone-lines"
                  label="Voice AI / Chatbot Interface"
                  hint="Screenshot of voice assistant or chatbot UI (800×450px)"
                />
              </div>
              <div className="role-card-body">
                <div className="role-card-icon"><i className="fa-solid fa-comments" /></div>
                <h3 className="role-card-title">AI Chatbots &amp; Voice Agents</h3>
                <p className="role-card-desc">
                  Bilingual voice and text agents for customer support, internal knowledge queries, and
                  data access — no SQL expertise required, no IT bottlenecks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="container">
          <span className="hero-eyebrow">Client Testimonials</span>
          <h2>What Clients Say</h2>
          <div className="testimonials-grid" style={{ marginTop: '3rem' }}>
            <div className="testimonial-card">
              <div className="quote-icon"><i className="fa-solid fa-quote-left" /></div>
              <p className="testimonial-text">
                "Muhammad delivered a system that eliminated our entire manual PO workflow. We went from
                a 3-day cycle to under 4 hours — and zero errors since launch. This is what production AI
                looks like."
              </p>
              <div className="testimonial-author-wrap">
                <div className="testimonial-avatar">
                  <i className="fa-regular fa-circle-user" />
                </div>
                <div>
                  <div className="author-name">Operations Director</div>
                  <div className="author-role">Manufacturing Company</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon"><i className="fa-solid fa-quote-left" /></div>
              <p className="testimonial-text">
                "The RAG system Muhammad built for us handles queries that used to take our team 45 minutes.
                It now answers in seconds — with sources cited. Our escalation rate dropped by 90%."
              </p>
              <div className="testimonial-author-wrap">
                <div className="testimonial-avatar">
                  <i className="fa-regular fa-circle-user" />
                </div>
                <div>
                  <div className="author-name">Head of Operations</div>
                  <div className="author-role">Big Four Bank</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon"><i className="fa-solid fa-quote-left" /></div>
              <p className="testimonial-text">
                "Our non-technical staff can now query the database just by speaking in Urdu. No SQL,
                no IT requests. Muhammad understood what we needed before we could fully articulate it."
              </p>
              <div className="testimonial-author-wrap">
                <div className="testimonial-avatar">
                  <i className="fa-regular fa-circle-user" />
                </div>
                <div>
                  <div className="author-name">Director of Technology</div>
                  <div className="author-role">Government Institution</div>
                </div>
              </div>
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
