import { IcoLinkedIn, IcoGitHub, IcoTableau } from './icons'
import { SOCIAL } from '../config'

const ICON_MAP = {
  LinkedIn: <IcoLinkedIn />,
  Tableau:  <IcoTableau />,
  GitHub:   <IcoGitHub />,
}

export default function Footer() {
  return (
    <footer className="footer">
      {SOCIAL.map(({ label, href }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="footer-icon" title={label}>
          {ICON_MAP[label]}
        </a>
      ))}
    </footer>
  )
}
