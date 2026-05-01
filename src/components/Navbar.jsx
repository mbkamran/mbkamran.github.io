import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useNavbarScroll from '../hooks/useNavbarScroll'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useNavbarScroll()
  const navRef = useRef(null)

  // Close menu on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (!navRef.current?.contains(e.target)) setMenuOpen(false)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')
  const close = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} ref={navRef}>
      <div className="container nav-content">
        <Link to="/" className="logo">MBK.</Link>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><NavLink to="/" end className={linkClass} onClick={close}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass} onClick={close}>About</NavLink></li>
          <li><NavLink to="/newsletter" className={linkClass} onClick={close}>Newsletter</NavLink></li>
          <li><NavLink to="/case-studies" className={linkClass} onClick={close}>Case Studies</NavLink></li>
        </ul>

        <a href="mailto:muhammadbkamran@gmail.com" className="btn btn-primary nav-cta">
          Book a Conversation
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
