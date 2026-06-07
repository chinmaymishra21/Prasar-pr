import { useEffect, useRef } from 'react'
import { LiquidButton } from './ui/liquid-glass-button'
import FeatureShaderCards from './ui/feature-shader-cards'
import { useScrollContext } from './ui/smooth-scroll'

const pillars = [
  {
    number: '01',
    title: 'Strategy Beyond Visibility',
    body: 'We focus on building long-term communication value instead of temporary hype or surface-level attention.',
  },
  {
    number: '02',
    title: 'Integrated Brand Thinking',
    body: 'Branding, communication, digital strategy, and audience engagement work together seamlessly under one approach.',
  },
  {
    number: '03',
    title: 'Rooted Yet Scalable',
    body: 'We understand regional narratives while building communication that connects on a larger scale.',
  },
  {
    number: '04',
    title: 'Human-Centered Storytelling',
    body: 'Every campaign is built around relevance, emotion, and meaningful audience connection.',
  },
  {
    number: '05',
    title: 'Modern Yet Trust-Driven',
    body: 'We combine modern communication strategies with consistency, credibility, and strategic thinking.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const { lenisRef } = useScrollContext()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const goToContact = () => {
    const el = document.getElementById('contact')
    if (el && lenisRef.current) lenisRef.current.scrollTo(el)
  }

  return (
    <section id="strategic-solutions" ref={ref} className="bg-pearl py-28 md:py-36 px-6">
      <div className="max-w-content mx-auto">

        {/* ── Why Prasar PR ── */}
        <div className="max-w-xl mb-16 md:mb-20">
          <p className="fade-in-up text-ochre text-xs tracking-widest uppercase font-body font-medium mb-4">
            Why Prasar PR
          </p>
          <h2 className="fade-in-up font-display text-3xl md:text-4xl text-navy font-semibold leading-snug" style={{ transitionDelay: '80ms' }}>
            Built For Modern Communication Needs
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-24 md:mb-32">
          {pillars.map((p, i) => (
            <div
              key={p.number}
              className="fade-in-up group"
              style={{ transitionDelay: `${160 + i * 80}ms` }}
            >
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

        {/* Divider */}
        <div className="fade-in-up w-full h-px bg-pearl-dark mb-24 md:mb-32 relative">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-ochre" />
        </div>

        {/* ── What We Do ── */}
        <div className="max-w-2xl mb-4">
          <p className="fade-in-up text-ochre text-xs tracking-widest uppercase font-body font-medium mb-4">
            What We Do
          </p>
          <h2 className="fade-in-up font-display text-3xl md:text-4xl text-navy font-semibold leading-snug mb-16 md:mb-20" style={{ transitionDelay: '80ms' }}>
            Communication &amp; Growth Solutions
          </h2>
        </div>

        <FeatureShaderCards />

        <div className="fade-in-up text-center" style={{ transitionDelay: '400ms' }}>
          <LiquidButton
            onClick={goToContact}
            size="lg"
            className="text-navy font-medium tracking-wide"
          >
            Start a Conversation
          </LiquidButton>
        </div>

      </div>
    </section>
  )
}
