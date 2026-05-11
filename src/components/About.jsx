import { IcoLinkedIn, IcoGitHub, IcoTableau } from './icons'

const GH = 'https://raw.githubusercontent.com/ffmc/website/main/images'

export default function About() {
  return (
    <section id="about" className="page-section">
      <div className="about-split fade-up">
        <div className="about-photo-wrap">
          <img src={`${GH}/website_thumb.png`} alt="Francisco Cardoso" />
        </div>
        <div className="about-right">
          <h2 className="about-name">About me</h2>
          <p className="about-bio">
            I design and build data products that transform complex information into clear decisions.
            With a decade bridging data engineering and business strategy, I specialize in interactive
            dashboards, scalable pipelines, and analytics platforms that people actually use.
          </p>
          <div className="social-pills">
            <a href="https://es.linkedin.com/in/ffmc" target="_blank" rel="noopener noreferrer" className="social-pill sp-ghost">
              <IcoLinkedIn /> LinkedIn
            </a>
            <a href="https://public.tableau.com/app/profile/francisco4773/vizzes" target="_blank" rel="noopener noreferrer" className="social-pill sp-ghost">
              <IcoTableau /> Tableau
            </a>
            <a href="https://github.com/ffmc" target="_blank" rel="noopener noreferrer" className="social-pill sp-ghost">
              <IcoGitHub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
