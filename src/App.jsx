import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import About from './components/About'
import WorkGallery from './components/WorkGallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { TIMING } from './config'

export default function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = ['about', 'work', 'contact']
    const onScroll = () => {
      setScrolled(window.scrollY > TIMING.scrollThreshold)
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - TIMING.scrollHeight) {
        setActiveSection('contact')
        return
      }
      const mid = window.scrollY + window.innerHeight * TIMING.viewportRatio
      let current = 'about'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= mid) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    let obs
    const t = setTimeout(() => {
      obs = new IntersectionObserver(
        entries => entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            obs.unobserve(e.target)
          }
        }),
        { threshold: TIMING.intersectionThreshold }
      )
      document.querySelectorAll('.fade-up:not(.in)').forEach(el => obs.observe(el))
    }, TIMING.scrollDelay)
    return () => { clearTimeout(t); if (obs) obs.disconnect() }
  }, [])

  return (
    <>
      <Nav activeSection={activeSection} scrolled={scrolled} />
      <main>
        <About />
        <section id="work" className="page-section" style={{ paddingTop: '60px' }}>
          <div className="section-rule">
            <span className="section-label">Work</span>
            <div className="section-line" />
          </div>
          <WorkGallery cols="2" />
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
