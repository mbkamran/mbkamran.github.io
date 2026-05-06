import { useState } from 'react'
import { Link } from 'react-router-dom'


const posts = [
  {
    to: '/blog/post-1',
    img: '/assets/images/blog-agentic-ai.png',
    tag: 'Agentic AI',
    title: 'How Agentic AI is Reshaping Enterprise Workflows in 2025',
    excerpt: "Agentic AI systems don't just answer questions — they take action. From scheduling meetings to querying databases, here's how multi-agent architectures are transforming enterprise operations.",
    date: 'May 1, 2025',
  },
  {
    to: '/blog/post-2',
    img: '/assets/images/blog-rag-vs-finetuning.png',
    tag: 'Technical',
    title: 'RAG vs Fine-Tuning: Choosing the Right Approach for Your Business',
    excerpt: "Two powerful tools, two very different use cases. Most businesses default to fine-tuning when RAG would serve them better — and vice versa. Here's the framework I use to decide.",
    date: 'Apr 18, 2025',
  },
  {
    to: '/blog/post-3',
    img: '/assets/images/blog-automation-roi.png',
    tag: 'Business',
    title: 'The Hidden Cost of Manual Workflows: Why Automation ROI Is Greater Than You Think',
    excerpt: 'Most companies underestimate what manual processes actually cost them. When you factor in errors, delays, and opportunity cost — the case for AI automation becomes undeniable.',
    date: 'Apr 5, 2025',
  },
]

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': import.meta.env.VITE_BREVO_API,
        },
        body: JSON.stringify({
          email,
          listIds: [Number(import.meta.env.VITE_BREVO_LIST_ID)],
          updateEnabled: true,
        }),
      })
      // 201 = created, 204 = already exists (updated)
      if (res.status === 201 || res.status === 204) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
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
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderBottom: '1px solid var(--card-border)' }} 
                  />
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
            {status === 'success' ? (
              <p style={{ color: 'var(--accent-color)', fontWeight: 600 }}>
                You're subscribed. Talk soon.
              </p>
            ) : (
              <>
                <form className="subscribe-form" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    className="subscribe-input"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === 'loading'}
                    aria-label="Email address"
                  />
                  <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
                  </button>
                </form>
                {status === 'error' && (
                  <p style={{ color: '#c0392b', marginTop: '0.75rem', fontSize: '0.9rem' }}>
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
