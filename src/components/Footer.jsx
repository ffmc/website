import { IcoLinkedIn, IcoGitHub, IcoTableau } from './icons'

const links = [
  { href: 'https://es.linkedin.com/in/ffmc', icon: <IcoLinkedIn />, label: 'LinkedIn' },
  { href: 'https://public.tableau.com/app/profile/francisco4773/vizzes', icon: <IcoTableau />, label: 'Tableau' },
  { href: 'https://github.com/ffmc', icon: <IcoGitHub />, label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="footer">
      {links.map(({ href, icon, label }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="footer-icon" title={label}>
          {icon}
        </a>
      ))}
    </footer>
  )
}
