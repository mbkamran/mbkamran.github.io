import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CTASection from '../components/CTASection'

const techPills = [
  'Python', 'Go', 'Claude / GPT / Gemini', 'LangChain', 'LangGraph', 'Pinecone',
  'Azure AI Search', 'ChromaDB', 'FastAPI', 'Docker', 'Kubernetes', 'AWS', 'Azure',
  'GCP', 'N8N', 'Make.com', 'PyTorch', 'TensorFlow', 'YOLO', 'OpenCV', 'VAPI',
  'ElevenLabs', 'ClickHouse', 'Databricks',
]

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
                Over the past 3+ years, I've built AI systems that have eliminated thousands of hours
                of manual work, reduced operational costs by up to 40%, and helped companies grow
                without growing their teams.
              </p>
              <p className="about-hero-desc">
                My approach is simple: I don't build demos. I build production systems — tested,
                deployed, monitored, and documented. When I deliver an AI solution, it runs on day one
                and scales as your business grows.
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
                hint="Upload: high-quality professional headshot or upper-body portrait, well-lit, dark background (600×700px)"
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
                I started solving real problems — a banking team drowning in support queries, a government
                institution that needed its data to speak two languages, a manufacturing company buried in
                manual data entry. Each challenge became a system. Each system delivered measurable ROI.
              </p>
              <p>
                What sets my work apart is that I treat AI as an engineering discipline, not a research
                experiment. I care about latency, reliability, and cost-per-query just as much as I care
                about accuracy. Production systems need to be bulletproof, and that's what I build.
              </p>
              <p>
                I've deployed multi-agent LLM systems, built enterprise RAG pipelines that search millions
                of documents in under a second, and created voice AI systems that bridge language barriers
                for non-technical users. Every project has one goal: make your business more capable than
                it was before.
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

      {/* Experience Timeline */}
      <section>
        <div className="container">
          <h2>Proven Track Record</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-date">Apr 2025 – Present</div>
              <h3 className="timeline-title">
                Associate Data Scientist <span className="timeline-company">@ Addo AI</span>
              </h3>
              <div className="timeline-desc">
                <ul>
                  <li>Designed Agentic Text-to-SQL system with Urdu/English voice input for a government institution — reduced operational costs by over 40% and eliminated the need for SQL expertise among non-technical staff.</li>
                  <li>Built enterprise Knowledge-Retrieval Chatbot on Azure Cloud for a Big Four bank — increased query resolution efficiency by 65% and reduced escalations to senior staff.</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-date">Aug 2024 – Mar 2025</div>
              <h3 className="timeline-title">
                Machine Learning Engineer <span className="timeline-company">@ CenturionVR</span>
              </h3>
              <div className="timeline-desc">
                <ul>
                  <li>Implemented a 3D Human Pose Detection solution using monocular camera and YOLO for a VR-less motion-detection game — enabling zero-hardware gameplay.</li>
                  <li>Achieved 30fps processing speed with 90% accuracy on edge devices including iOS and Android, deployed via CoreML and ONNX.</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-date">Mar 2023 – Aug 2024</div>
              <h3 className="timeline-title">
                Machine Learning Engineer <span className="timeline-company">@ Solutyics</span>
              </h3>
              <div className="timeline-desc">
                <ul>
                  <li>Created a Developer-Debugging Chatbot using a custom fine-tuned T5 model — reduced debugging time by 50% for the engineering team.</li>
                  <li>Implemented a YOLO-based customer activity tracking system for a major superstore — surfaced actionable insights on customer flow patterns.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack-section">
        <div className="container">
          <h2>Technologies I Work With</h2>
          <div className="tech-pills">
            {techPills.map((tech) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
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
