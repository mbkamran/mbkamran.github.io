import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Newsletter from './pages/Newsletter'
import CaseStudies from './pages/CaseStudies'
import Post1 from './pages/blog/Post1'
import Post2 from './pages/blog/Post2'
import Post3 from './pages/blog/Post3'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog/post-1" element={<Post1 />} />
          <Route path="/blog/post-2" element={<Post2 />} />
          <Route path="/blog/post-3" element={<Post3 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
