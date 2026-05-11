import projects from '../projects'

function Placeholder({ colors }) {
  const bars = [0.42, 0.68, 0.51, 0.88, 0.61, 0.74, 0.44, 0.79, 0.55, 0.66, 0.38, 0.72]
  return (
    <div className="work-placeholder" style={{ background: `linear-gradient(145deg, ${colors[0]}, ${colors[1]})` }}>
      <div className="ph-bars">
        {bars.map((h, i) => (
          <div key={i} className="ph-bar" style={{ height: `${h * 100}%` }} />
        ))}
      </div>
    </div>
  )
}

function CardWrapper({ link, className, style, children }) {
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={className} style={style}>
        {children}
      </a>
    )
  }
  return <div className={className} style={style}>{children}</div>
}

export default function WorkGallery({ cols = '2', showDesc = true }) {
  return (
    <div className="work-gallery" style={{ '--cols': cols }}>
      {projects.map((p, i) => (
        <CardWrapper
          key={p.id}
          link={p.link}
          className="work-thumb fade-up"
          style={{ transitionDelay: `${i * 0.06}s` }}
        >
          <div className="work-info">
            <div className="work-title">{p.title}</div>
            <div className="work-type">{p.type}</div>
          </div>
          <div className="work-img-wrap" style={{ aspectRatio: `${p.ratio[0]}/${p.ratio[1]}` }}>
            {p.image
              ? <img src={p.image} alt={p.title} />
              : <Placeholder colors={p.ph} />
            }
            <div className="work-hover-overlay" />
            {showDesc && (
              <div className="work-desc-band">
                <p>{p.desc}</p>
              </div>
            )}
          </div>
        </CardWrapper>
      ))}
    </div>
  )
}
