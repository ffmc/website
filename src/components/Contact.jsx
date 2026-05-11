import { useState } from 'react'
import { IcoMail } from './icons'

const SKILLS = ['Data Visualization', 'Data Automation', 'Data Product Design', 'Data System Architecture']
const EMAIL = 'ffmcardoso@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(EMAIL).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2600)
  }

  return (
    <section id="contact">
      <div className="contact-wrap">
        <h2 className="contact-heading fade-up">Got a data problem?</h2>
        <p className="contact-sub fade-up">
          If you have a data problem that needs solving,<br />
          or a project that needs a good partner, let&apos;s talk. Anything else works too.
        </p>
        <div className="skill-pills fade-up">
          {SKILLS.map(s => (
            <span key={s} className="skill-pill">{s}</span>
          ))}
        </div>
        <button className="email-pill fade-up" onClick={copy}>
          <IcoMail /> {EMAIL}
        </button>
        <div className="copy-note" style={{ opacity: copied ? 1 : 0 }}>
          Copied to clipboard ✓
        </div>
      </div>
    </section>
  )
}
