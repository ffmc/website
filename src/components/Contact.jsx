import { useState } from 'react'
import { IcoMail } from './icons'
import { SITE, TIMING } from '../config'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(SITE.email).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), TIMING.copyNotification)
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
          {SITE.skills.map(s => (
            <span key={s} className="skill-pill">{s}</span>
          ))}
        </div>
        <button className="email-pill fade-up" onClick={copy}>
          <IcoMail /> {SITE.email}
        </button>
        <div className="copy-note" style={{ opacity: copied ? 1 : 0 }}>
          Copied to clipboard ✓
        </div>
      </div>
    </section>
  )
}
