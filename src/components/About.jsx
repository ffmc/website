import { IcoLinkedIn, IcoGitHub, IcoTableau } from './icons'
import { SITE, SOCIAL } from '../config'

const ICON_MAP = {
  LinkedIn: <IcoLinkedIn />,
  Tableau:  <IcoTableau />,
  GitHub:   <IcoGitHub />,
}

export default function About() {
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
          <p className="about-bio">
            Getting there wasn&rsquo;t linear. I studied something that didn&rsquo;t stick, then spent a few years
            as a Winery Tour Guide, in Housing Customer Service and crafting marketing content. Each
            one taught me something useful but none of them felt quite right until data did.
          </p>
          <p className="about-bio">
            Since then I have been building solutions to data problems of all shapes: helping people
            see and understand their data, cutting out manual work that shouldn&rsquo;t exist, and putting
            together custom platforms that actually fit how teams work with data.
          </p>
          <p className="about-bio about-bio--last">
            Whatever the tool, the project or the problem, that feeling of turning something complex
            into something obvious never gets old.
          </p>
          <div className="social-pills">
            {SOCIAL.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-pill">
                {ICON_MAP[label]} {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
