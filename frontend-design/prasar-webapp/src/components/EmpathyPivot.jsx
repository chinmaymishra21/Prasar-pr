import { useEffect, useRef } from 'react'

export default function EmpathyPivot() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.2 }
    )
    const els = ref.current?.querySelectorAll('.fade-in-up')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="our-approach"
      ref={ref}
      className="bg-navy py-28 md:py-36 px-6 min-h-screen"
    >
      <div className="max-w-content mx-auto">
        <div className="max-w-3xl mx-auto text-center">

          {/* Section label */}
          <p className="fade-in-up text-ochre text-xs tracking-widest uppercase font-body font-medium mb-10">
            The Empathy Pivot
          </p>

          {/* Pull quote */}
          <blockquote className="fade-in-up font-display text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-snug mb-10" style={{ transitionDelay: '80ms' }}>
            "Visibility without trust is noise.<br />
            <em className="not-italic text-white/65">Trust without visibility is silence.</em>"
          </blockquote>

          {/* Divider */}
          <div className="fade-in-up flex justify-center mb-10" style={{ transitionDelay: '160ms' }}>
            <span className="block w-12 h-px bg-ochre" />
          </div>

          {/* Body */}
          <p className="fade-in-up font-body text-white/80 text-lg leading-relaxed mb-6" style={{ transitionDelay: '200ms' }}>
            Traditional broadcast media tells communities what to think. Prasar PR builds the conditions in which communities choose to believe — a far more durable outcome.
          </p>
          <p className="fade-in-up font-body text-white/60 text-base leading-relaxed" style={{ transitionDelay: '260ms' }}>
            Healthcare institutions, educational bodies, and political leaders operate at the intersection of public confidence and operational credibility. They do not need louder voices. They need more precise ones — rooted in local relationships, institutional respect, and a deep understanding of the community they serve.
          </p>
        </div>
      </div>
    </section>
  )
}
