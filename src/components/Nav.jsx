export default function Nav({ activeSection }) {
  const links = [['work', 'Work'], ['contact', 'Contact']]

  const nameStyle = activeSection === 'about'
    ? { background: 'var(--accent)', color: '#444' }
    : { background: '#1C1C1E', color: '#fff' }

  return (
    <nav className="nav">
      <a href="#about" className="nav-pill nav-name" style={nameStyle}>
        Francisco Cardoso
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
