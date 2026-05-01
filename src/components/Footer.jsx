import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="footer-logo">MBK.</Link>
            <p className="footer-desc">
              AI Engineer &amp; Automation Expert helping businesses eliminate manual work and
              scale intelligently through production-ready AI systems.
            </p>
          </div>
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/newsletter">Newsletter</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li><Link to="/case-studies">AI Workflow Automation</Link></li>
              <li><Link to="/case-studies">Enterprise RAG Systems</Link></li>
              <li><Link to="/case-studies">AI Chatbots &amp; Agents</Link></li>
              <li><Link to="/case-studies">Edge + Cloud Deployment</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-col-title">Connect</h4>
            <ul className="footer-links">
              <li><a href="mailto:muhammadbkamran@gmail.com">muhammadbkamran@gmail.com</a></li>
              <li><a href="https://linkedin.com/in/muhammad-bin-kamran" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/mbkamran" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><span>Lahore, Pakistan</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Muhammad Bin Kamran. All rights reserved.</p>
          <div className="footer-social-links">
            <a href="https://github.com/mbkamran" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github" />
            </a>
            <a href="https://linkedin.com/in/muhammad-bin-kamran" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin" />
            </a>
            <a href="mailto:muhammadbkamran@gmail.com" aria-label="Email">
              <i className="fa-solid fa-envelope" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
