import { useEffect, useRef } from 'react'

const pillars = [
  {
    number: '01',
    title: 'Narrative Precision',
    body: 'Every message is architected, not improvised. We identify the single truth that an institution needs its community to understand — and we build every communication around it with surgical consistency.',
  },
  {
    number: '02',
    title: 'Institutional Integrity',
    body: 'Our counsel is grounded in the long-term reputation of our clients, not short-term optics. We protect what institutions have built over years — and extend it with care.',
  },
  {
    number: '03',
    title: 'Hyper-Local Empathy',
    body: 'Trust is built at the street level, not from a broadcast tower. We immerse ourselves in the local context of every client — understanding cultural nuance, community relationships, and the specific expectations of the people who matter most.',
  },
]

export default function Philosophy() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-pearl py-28 md:py-36 px-6 min-h-screen">
      <div className="max-w-content mx-auto">

        {/* Heading */}
        <div className="max-w-xl mb-16 md:mb-20">
          <p className="fade-in-up text-ochre text-xs tracking-widest uppercase font-body font-medium mb-4">
            The Architecture of Trust
          </p>
          <h2 className="fade-in-up font-display text-3xl md:text-4xl text-navy font-semibold leading-snug" style={{ transitionDelay: '80ms' }}>
            How we build what others only promise.
          </h2>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {pillars.map((p, i) => (
            <div
              key={p.number}
              className="fade-in-up group"
              style={{ transitionDelay: `${160 + i * 80}ms` }}
            >
              {/* Number + Ochre top border */}
              <div className="w-full h-px bg-pearl-dark mb-6 relative">
                <span className="absolute top-0 left-0 w-10 h-0.5 bg-ochre" />
              </div>
              <p className="font-display text-4xl font-semibold text-navy/15 mb-3 leading-none select-none">
                {p.number}
              </p>
              <h3 className="font-display text-xl text-navy font-semibold mb-4 leading-snug">
                {p.title}
              </h3>
              <p className="font-body text-charcoal/80 text-sm leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
