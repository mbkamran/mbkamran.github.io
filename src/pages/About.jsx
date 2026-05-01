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
              <span className="about-eyebrow">Why This Matters</span>
              <h1 className="about-hero-title">
                Your team's time is going somewhere. The question is whether it should be.
              </h1>
              <p className="about-hero-desc">
                Working across banking, government, and manufacturing, I kept seeing the same
                thing: talented teams spending the majority of their day on work that a
                well-built system could handle faster, cheaper, and without errors. Not because
                they lacked capability — because the right system didn't exist yet.
              </p>
              <p className="about-hero-desc">
                That's the gap I fill. Not with prototypes or proofs of concept, but with
                production AI systems that run on your data, within your workflows, from day
                one — so your team can stop managing the process and start focusing on the
                work only they can do.
              </p>
              <div className="hero-cta-group">
                <Link to="/case-studies" className="btn btn-primary">See the Results</Link>
                <a href="mailto:muhammadbkamran@gmail.com" className="btn">Start a Conversation</a>
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
                It started with a simple observation: most business problems that look like
                people problems are actually process problems.
              </p>
              <p>
                A banking team not keeping up with support queries — not because they weren't
                working hard, but because every single answer required manually searching
                thousands of documents. A government institution where non-technical staff were
                completely dependent on IT for every data report they needed to do their jobs.
                A manufacturing company where a purchase order that should take minutes was
                taking three days.
              </p>
              <p>
                In every case, the constraint wasn't the people. It was the absence of a system
                that worked for them. That's what I build — AI that quietly takes over the work
                that was slowing everything down, so the people doing that work can finally
                focus on what they were hired to do in the first place.
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
              <div className="impact-label">Average improvement in<br />team throughput</div>
            </div>
            <div>
              <div className="impact-number">10<span style={{ fontSize: '2.5rem' }}>+</span></div>
              <div className="impact-label">Businesses running on<br />AI systems built for them</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="container">
          <span className="about-eyebrow">What Clients Say</span>
          <h2>Results, in Their Own Words</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon"><i className="fa-solid fa-quote-left" /></div>
              <p className="testimonial-text">
                "We went from a 3-day purchase order cycle to under 4 hours — automatically,
                with zero errors since go-live. Muhammad didn't just deliver a system; he
                delivered something our team actually uses and trusts every day."
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
                "Our support team was drowning. Queries that used to take 45 minutes now
                resolve in seconds — with the exact source cited. Escalations to senior staff
                dropped by 90%. The ROI was visible within the first month."
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
                "Our non-technical staff can now query the database themselves — by voice,
                in Urdu. No SQL, no IT requests, no waiting. Muhammad understood the problem
                before we could fully articulate it, and the system he built reflects that."
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
        eyebrow="Let's talk"
        title={<>Find the Work That<br />Shouldn't Need Your Team.</>}
        description="Every engagement starts with a single conversation about where your team's time is going. Most of the time, the biggest opportunity is hiding in plain sight."
      />
    </>
  )
}
