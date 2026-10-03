import { useState, useRef, useEffect } from 'react'
import projects from '../projects'

const PER_PAGE = 6
const CATEGORIES = ['Data Visualization', 'Automation', 'Apps', 'Prototypes']
  .filter(c => projects.some(p => p.category === c))

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

function useIsMobile(breakpoint = 860) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth <= breakpoint
  )
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`)
    const onChange = e => setIsMobile(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [breakpoint])
  return isMobile
}

export default function WorkGallery({ cols = '2' }) {
  const [count, setCount] = useState(PER_PAGE)
  const [filter, setFilter] = useState('All')
  const prevCountRef = useRef(0)
  const filterChangedRef = useRef(false)
  const isMobile = useIsMobile()
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)
  const { leftIds, rightIds } = buildColumnAssignment(filtered)
  const visible = filtered.slice(0, count)
  const hasMore = count < filtered.length

  const leftCol  = visible.filter(p => leftIds.has(p.id))
  const rightCol = visible.filter(p => rightIds.has(p.id))

  function loadMore() {
    prevCountRef.current = count
    setCount(c => c + PER_PAGE)
  }

  function selectFilter(f) {
    if (f === filter) return
    prevCountRef.current = 0
    filterChangedRef.current = true
    setFilter(f)
    setCount(PER_PAGE)
  }

  function renderCard(p) {
    const globalIndex = filtered.indexOf(p)
    const isNew = globalIndex >= prevCountRef.current
    const entering = filterChangedRef.current && prevCountRef.current === 0
    return (
      <CardWrapper
        key={`${filter}-${p.id}`}
        link={p.link}
        className={`work-thumb fade-up in${entering ? ' work-enter' : ''}`}
        style={entering
          ? { animationDelay: `${globalIndex * 0.06}s` }
          : isNew ? { transitionDelay: `${(globalIndex - prevCountRef.current) * 0.06}s` } : {}}
      >
        <div className="work-info">
          <div className="work-title">{p.title}</div>
          {filter === 'All' && <span className="work-tag">{p.category}</span>}
        </div>
        {p.video
          ? <VideoCard src={p.video} poster={p.image} desc={p.desc} />
          : (
            <div className="work-img-wrap">
              {p.image && <img src={p.image} alt={p.title} loading="lazy" />}
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

  const filters = (
    <div className="work-filters">
      {['All', ...CATEGORIES].map(f => (
        <button
          key={f}
          className={`filter-pill${f === filter ? ' active' : ''}`}
          aria-pressed={f === filter}
          onClick={() => selectFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  )

  if (String(cols) === '1' || isMobile) {
    return (
      <>
        {filters}
        <div className="work-gallery-col">
          {visible.map(p => renderCard(p))}
        </div>
        {pagination}
      </>
    )
  }

  return (
    <>
      {filters}
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
