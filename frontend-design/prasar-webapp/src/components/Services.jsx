import { useEffect, useRef } from 'react'
import { LiquidButton } from './ui/liquid-glass-button'
import FeatureShaderCards from './ui/feature-shader-cards'
import { useScrollContext } from './ui/smooth-scroll'

export default function Services() {
  const ref = useRef(null)
  const { lenisRef } = useScrollContext()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const goToContact = () => {
    const el = document.getElementById('contact')
    if (el && lenisRef.current) lenisRef.current.scrollTo(el)
  }

  return (
    <section id="strategic-solutions" ref={ref} className="bg-navy py-28 md:py-36 px-6 min-h-screen">
      <div className="max-w-content mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-4">
          <p className="fade-in-up text-ochre text-xs tracking-widest uppercase font-body font-medium mb-4">
            Strategic Solutions
          </p>
          <h2 className="fade-in-up font-display text-3xl md:text-4xl text-white font-semibold leading-snug mb-4" style={{ transitionDelay: '80ms' }}>
            Advisory engagements, not service packages.
          </h2>
        </div>
        <p className="fade-in-up font-body text-white/65 text-base leading-relaxed max-w-xl mb-16 md:mb-20" style={{ transitionDelay: '140ms' }}>
          We do not take on every client. We take on the right ones.
        </p>

        {/* Cards */}
        <FeatureShaderCards />

        {/* Section CTA */}
        <div className="fade-in-up text-center" style={{ transitionDelay: '400ms' }}>
          <LiquidButton
            onClick={goToContact}
            size="lg"
            className="text-white font-medium tracking-wide"
          >
            Explore Our Approach
          </LiquidButton>
        </div>
      </div>
    </section>
  )
}
