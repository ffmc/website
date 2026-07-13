import { SITE } from '../config'

export default function Nav({ activeSection, scrolled }) {
  const links = [['work', 'Work'], ['contact', 'Contact']]

  const nameStyle = activeSection === 'about'
    ? { background: 'var(--color-accent)', color: 'var(--color-on-accent)' }
    : { background: 'var(--color-primary)', color: 'var(--color-on-primary)' }

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <a href="#about" className="nav-pill nav-name" style={nameStyle}>
        {SITE.name}
      </a>
      <div className="nav-pill nav-menu">
        {links.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-link${activeSection === id ? ' active' : ''}`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
