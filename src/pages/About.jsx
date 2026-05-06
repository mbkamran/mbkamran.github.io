import { Link } from 'react-router-dom'

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
                pattern: talented teams spending the majority of their day on work that a
                well-designed system could handle faster, cheaper, and without errors. Not
                because they lacked capability — because the right system didn't exist yet.
              </p>
              <p className="about-hero-desc">
                That gap is almost always solvable. Not with a prototype built to impress in
                a meeting, but with something that fits into how the team already works — a
                system they don't have to manage. When that happens, the shift isn't just
                efficiency. It's the team finally doing what they were actually hired to do.
              </p>
              <div className="hero-cta-group">
                <Link to="/case-studies" className="btn btn-primary">See the Results</Link>
                <a href="mailto:muhammadbkamran@gmail.com" className="btn">Get in Touch</a>
              </div>
            </div>
            <div className="about-hero-right">
              <img 
                src="/assets/images/home-hero-portrait2.jpg" 
                alt="Professional Portrait" 
                className="about-photo-placeholder" 
                style={{ objectFit: 'cover' }} 
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
                that worked for them. And in every case, once the right system was in place,
                the team didn't change — but what they were capable of did.
              </p>
            </div>
            <div className="story-photo">
              <img 
                src="/assets/images/prototype_3.png" 
                alt="Working Photo" 
                className="story-photo-placeholder" 
                style={{ objectFit: 'cover' }} 
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

      {/* Testimonials — hidden until verified names/details are available
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
                <div className="testimonial-avatar"><i className="fa-regular fa-circle-user" /></div>
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
                <div className="testimonial-avatar"><i className="fa-regular fa-circle-user" /></div>
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
                <div className="testimonial-avatar"><i className="fa-regular fa-circle-user" /></div>
                <div>
                  <div className="author-name">Director of Technology</div>
                  <div className="author-role">Government Institution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Patterns from the Field */}
      <section>
        <div className="container">
          <span className="about-eyebrow">What the Work Has Taught Me</span>
          <h2>Patterns That Show Up Everywhere</h2>
          <div className="insights-grid">

            <div className="insight-card">
              <div className="insight-icon"><i className="fa-solid fa-magnifying-glass" /></div>
              <h3 className="insight-title">The bottleneck is rarely where the team thinks it is</h3>
              <p className="insight-text">
                Most organisations can identify the symptom — slow turnaround, mounting backlogs,
                overloaded staff. The actual constraint is almost always upstream: a gap between
                where data lives and where the system expects it to be. Fix that gap, and the
                symptom resolves itself.
              </p>
            </div>

            <div className="insight-card">
              <div className="insight-icon"><i className="fa-solid fa-users" /></div>
              <h3 className="insight-title">Adoption beats accuracy every time</h3>
              <p className="insight-text">
                A system that fits naturally into the team's existing workflow will outperform
                a more accurate one that requires a behaviour change. The most technically
                impressive AI solution is worthless if it adds friction. The only measure that
                matters is whether the team uses it tomorrow without being asked.
              </p>
            </div>

            <div className="insight-card">
              <div className="insight-icon"><i className="fa-solid fa-rotate" /></div>
              <h3 className="insight-title">Start with the repetitive, not the complex</h3>
              <p className="insight-text">
                The highest-ROI applications of AI are rarely the impressive-sounding ones.
                They're the tasks done 50 times a day that nobody questions — data entry,
                document lookups, routine reporting. Automating one of those compounds
                faster than any ambitious use case.
              </p>
            </div>

          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Let's talk"
        title={<>The Biggest Opportunity Is Usually<br />the Most Obvious One.</>}
        description="It's almost always the task everyone does every day without questioning it. That's where the leverage is."
      />
    </>
  )
}
