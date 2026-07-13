import { useState } from 'react'
import { IcoLinkedIn, IcoGitHub, IcoTableau } from './icons'
import { SITE, SOCIAL } from '../config'

const ICON_MAP = {
  LinkedIn: <IcoLinkedIn />,
  Tableau:  <IcoTableau />,
  GitHub:   <IcoGitHub />,
}

export default function About() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="about" className="page-section">
      <div className="about-split fade-up">
        <div className="about-photo-wrap">
          <img src="/images/website_thumb.png" alt={SITE.name} />
        </div>
        <div className="about-right">
          <p className="about-bio">
            A few years into working as a Marketing Content Creator, I was handed a spreadsheet and
            asked to build a social media report. Nobody warned me I would enjoy figuring out how to
            clean the data, pick the right charts, and fiddle around with UX/UI problems nobody had
            spotted. Something had sparked that I hadn&rsquo;t expected, and that was enough. I was hooked.
          </p>
          {!expanded && (
            <button type="button" className="about-load-more" onClick={() => setExpanded(true)}>
              Read more
            </button>
          )}
          {expanded && (
            <>
              <p className="about-bio">
                Getting there wasn&rsquo;t linear. I studied something that didn&rsquo;t stick, then spent a few years
                as a Winery Tour Guide, in Housing Customer Service and crafting marketing content. Each
                one taught me something useful but none of them felt quite right until data did.
              </p>
              <p className="about-bio">
                Data visualization is where it started, making complex things readable, picking the right chart,
                obsessing over the UX until something clicked. More recently the work has shifted toward building
                complete solutions. The Scramble Cook is a personal app that generates a random weekly menu from
                home recipes, solving a household chore that had stuck around for years. A next-gen data portal built from
                scratch did the same at work, bringing scattered data products under one roof so teams stop hunting
                across platforms.
              </p>
              <p className="about-bio about-bio--last">
                Whatever the tool, the project or the problem, that feeling of turning something complex
                into something obvious never gets old.
              </p>
            </>
          )}
          <div className="social-pills">
            {SOCIAL.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-pill" aria-label={label}>
                {ICON_MAP[label]} <span className="social-label">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
