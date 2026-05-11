import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import About from './components/About'
import WorkGallery from './components/WorkGallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [cols, setCols] = useState('2')

  // Scroll-spy
  useEffect(() => {
    const sections = ['about', 'work', 'contact']
    const onScroll = () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact')
        return
      }
      const mid = window.scrollY + window.innerHeight * 0.38
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

  // Accent CSS variable
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', '#FFB343')
  }, [])

  // Fade-up on scroll
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
        { threshold: 0.08 }
      )
      document.querySelectorAll('.fade-up:not(.in)').forEach(el => obs.observe(el))
    }, 80)
    return () => { clearTimeout(t); if (obs) obs.disconnect() }
  }, [cols])

  return (
    <>
      <Nav activeSection={activeSection} />
      <main>
        <About />
        <section id="work" className="page-section" style={{ paddingTop: '60px' }}>
          <div className="section-rule">
            <span className="section-label">Work</span>
            <div className="section-line" />
          </div>
          <WorkGallery cols={cols} />
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
