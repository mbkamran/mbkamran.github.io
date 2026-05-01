import { useState } from 'react'
import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'

const posts = [
  {
    to: '/blog/post-1',
    icon: 'fa-solid fa-diagram-project',
    label: 'Blog Header Image',
    hint: 'Agentic workflow diagram or abstract AI visual (800×450px)',
    tag: 'Agentic AI',
    title: 'How Agentic AI is Reshaping Enterprise Workflows in 2025',
    excerpt: "Agentic AI systems don't just answer questions — they take action. From scheduling meetings to querying databases, here's how multi-agent architectures are transforming enterprise operations.",
    date: 'May 1, 2025',
  },
  {
    to: '/blog/post-2',
    icon: 'fa-solid fa-code-compare',
    label: 'Blog Header Image',
    hint: 'RAG vs Fine-Tuning comparison diagram or knowledge graph visual (800×450px)',
    tag: 'Technical',
    title: 'RAG vs Fine-Tuning: Choosing the Right Approach for Your Business',
    excerpt: "Two powerful tools, two very different use cases. Most businesses default to fine-tuning when RAG would serve them better — and vice versa. Here's the framework I use to decide.",
    date: 'Apr 18, 2025',
  },
  {
    to: '/blog/post-3',
    icon: 'fa-solid fa-chart-line',
    label: 'Blog Header Image',
    hint: 'Business productivity chart or automation ROI visual (800×450px)',
    tag: 'Business',
    title: 'The Hidden Cost of Manual Workflows: Why Automation ROI Is Greater Than You Think',
    excerpt: 'Most companies underestimate what manual processes actually cost them. When you factor in errors, delays, and opportunity cost — the case for AI automation becomes undeniable.',
    date: 'Apr 5, 2025',
  },
]

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <span className="page-header-eyebrow">Insights &amp; Perspectives</span>
          <h1 className="page-header-title">The AI Automation Brief</h1>
          <p className="page-header-subtitle">
            Practical insights on LLMs, agentic workflows, and enterprise AI — written for builders
            and business leaders who want to stay ahead.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="blog-grid">
            {posts.map((post) => (
              <div key={post.to} className="blog-card">
                <div className="blog-card-img-wrap">
                  <ImagePlaceholder icon={post.icon} label={post.label} hint={post.hint} />
                </div>
                <div className="blog-card-body">
                  <span className="blog-category-tag">{post.tag}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <span className="blog-date">
                      <i className="fa-regular fa-calendar" style={{ marginRight: '0.3rem' }} />
                      {post.date}
                    </span>
                    <Link to={post.to} className="read-more-link">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe */}
          <div className="subscribe-section">
            <h2>Stay in the Loop</h2>
            <p className="subscribe-desc">
              Get practical AI automation insights delivered to your inbox. No fluff — just frameworks,
              case studies, and tools that actually work.
            </p>
            {submitted ? (
              <p style={{ color: 'var(--accent-color)', fontWeight: 600 }}>
                You're subscribed. Talk soon.
              </p>
            ) : (
              <form className="subscribe-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="subscribe-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
