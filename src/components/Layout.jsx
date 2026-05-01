import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Stars from './Stars'
import Navbar from './Navbar'
import Footer from './Footer'
import useScrollReveal from '../hooks/useScrollReveal'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout({ children }) {
  useScrollReveal()

  return (
    <>
      <Stars />
      <ScrollToTop />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
