import { useState, useRef } from 'react'
import projects from '../projects'

const PER_PAGE = 6

function buildColumnAssignment(items) {
  const leftIds = new Set()
  const rightIds = new Set()
  let leftH = 0, rightH = 0
  for (const p of items) {
    if (leftH <= rightH) {
      leftIds.add(p.id)
      leftH += p.thumbH || 900
    } else {
      rightIds.add(p.id)
      rightH += p.thumbH || 900
    }
  }
  return { leftIds, rightIds }
}

const { leftIds, rightIds } = buildColumnAssignment(projects)

function CardWrapper({ link, className, style, children }) {
  if (link) {
    const isInternal = link.startsWith('/')
    return (
      <a
        href={link}
        {...(isInternal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
        className={className}
        style={style}
      >
        {children}
      </a>
    )
  }
  return <div className={className} style={style}>{children}</div>
}

function VideoCard({ src, poster, desc }) {
  const videoRef = useRef(null)
  return (
    <div
      className="work-img-wrap work-img-wrap--video"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => { videoRef.current?.pause(); videoRef.current.currentTime = 0 }}
    >
      <video ref={videoRef} src={src} poster={poster} muted loop playsInline />
      <div className="work-hover-overlay" />
      <div className="work-desc-band"><p>{desc}</p></div>
    </div>
  )
}

export default function WorkGallery({ cols = '2' }) {
  const [count, setCount] = useState(PER_PAGE)
  const prevCountRef = useRef(0)
  const visible = projects.slice(0, count)
  const hasMore = count < projects.length

  const leftCol  = visible.filter(p => leftIds.has(p.id))
  const rightCol = visible.filter(p => rightIds.has(p.id))

  function loadMore() {
    prevCountRef.current = count
    setCount(c => c + PER_PAGE)
  }

  function renderCard(p) {
    const globalIndex = projects.indexOf(p)
    const isNew = globalIndex >= prevCountRef.current
    return (
      <CardWrapper
        key={p.id}
        link={p.link}
        className="work-thumb fade-up in"
        style={isNew ? { transitionDelay: `${(globalIndex - prevCountRef.current) * 0.06}s` } : {}}
      >
        <div className="work-info">
          <div className="work-title">{p.title}</div>
        </div>
        {p.video
          ? <VideoCard src={p.video} poster={p.image} desc={p.desc} />
          : (
            <div className="work-img-wrap">
              {p.image && <img src={p.image} alt={p.title} />}
              <div className="work-hover-overlay" />
              <div className="work-desc-band"><p>{p.desc}</p></div>
            </div>
          )
        }
      </CardWrapper>
    )
  }

  const pagination = hasMore && (
    <div className="work-pagination">
      <button className="page-btn" onClick={loadMore}>Load More</button>
    </div>
  )

  if (String(cols) === '1') {
    return (
      <>
        <div className="work-gallery-col">
          {visible.map(p => renderCard(p))}
        </div>
        {pagination}
      </>
    )
  }

  return (
    <>
      <div className="work-gallery-2col">
        <div className="work-gallery-col">
          {leftCol.map(p => renderCard(p))}
        </div>
        <div className="work-gallery-col">
          {rightCol.map(p => renderCard(p))}
        </div>
      </div>
      {pagination}
    </>
  )
}
