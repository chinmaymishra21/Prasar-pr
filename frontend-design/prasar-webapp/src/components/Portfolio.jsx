import { useEffect, useRef } from 'react'

const portfolioItems = [
  {
    id: 1,
    number: '01',
    company: 'Brand Visibility & Growth',
    title: 'Integrated Communication Strategy',
    description: 'Built integrated communication strategies focused on increasing visibility, audience trust, and digital engagement.',
    category: 'Branding · Digital Growth',
  },
  {
    id: 2,
    number: '02',
    company: 'Public Communication Campaigns',
    title: 'Narrative-Driven Public Initiative',
    description: 'Developed narrative-driven campaigns for public initiatives and community-focused communication.',
    category: 'PR · Public Affairs',
  },
  {
    id: 3,
    number: '03',
    company: 'Social Media & Digital Growth',
    title: 'Platform-Specific Storytelling',
    description: 'Strengthened digital presence through platform-specific storytelling and engagement strategies.',
    category: 'Social Media · Digital',
  },
  {
    id: 4,
    number: '04',
    company: 'Institutional Branding',
    title: 'Organizational Positioning',
    description: 'Helped organizations communicate with clarity, consistency, and stronger public positioning.',
    category: 'Corporate · Institutional',
  },
]

export default function Portfolio() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" ref={ref} className="bg-navy py-28 md:py-36 px-6">
      <div className="max-w-content mx-auto">

        {/* Section Header */}
        <div className="max-w-xl mb-16 md:mb-20">
          <p className="fade-in-up text-ochre text-xs tracking-widest uppercase font-body font-medium mb-4">
            Featured Work
          </p>
          <h2 className="fade-in-up font-display text-3xl md:text-4xl text-white font-semibold leading-snug mb-4" style={{ transitionDelay: '80ms' }}>
            Communication That Creates Impact
          </h2>
          <p className="fade-in-up font-body text-white/60 text-base leading-relaxed" style={{ transitionDelay: '140ms' }}>
            Work that drives real visibility, trust, and audience engagement.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioItems.map((item, i) => (
            <div
              key={item.id}
              className="fade-in-up group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-between hover:border-ochre/40 hover:bg-white/8 transition-all duration-300"
              style={{ transitionDelay: `${200 + i * 80}ms`, minHeight: '220px' }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-8 w-10 h-0.5 bg-ochre" />

              {/* Number */}
              <p className="font-display text-5xl font-semibold text-white/10 leading-none select-none mb-4">
                {item.number}
              </p>

              {/* Content */}
              <div>
                <p className="font-body text-ochre/80 text-xs tracking-widest uppercase mb-3">
                  {item.category}
                </p>
                <h3 className="font-display text-xl text-white font-semibold leading-snug mb-3">
                  {item.company}
                </h3>
                <p className="font-body text-white/55 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
