import { useEffect, useRef } from 'react'
import { LiquidButton } from './ui/liquid-glass-button'
import { useScrollContext } from './ui/smooth-scroll'

export default function CTA() {
  const { lenisRef } = useScrollContext()
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const goToContact = () => {
    const el = document.getElementById('contact')
    if (el && lenisRef.current) lenisRef.current.scrollTo(el)
  }

  return (
    <section ref={ref} className="py-28 md:py-36 px-6 bg-navy text-white relative overflow-hidden">
      {/* Ochre radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 50% 60%, rgba(212,136,66,0.10) 0%, transparent 65%)',
      }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="fade-in-up text-ochre text-xs tracking-widest uppercase font-body font-medium mb-6">
          Get Started
        </p>
        <h2 className="fade-in-up font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-snug mb-6" style={{ transitionDelay: '80ms' }}>
          Ready To Strengthen Your Brand Communication?
        </h2>
        <p className="fade-in-up font-body text-white/70 text-lg md:text-xl leading-relaxed mb-12" style={{ transitionDelay: '160ms' }}>
          Let's create communication strategies that build visibility, trust, and long-term growth.
        </p>
        <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: '240ms' }}>
          <LiquidButton size="xl" className="text-ochre font-medium tracking-wide" onClick={goToContact}>
            Start a Conversation
          </LiquidButton>
          <LiquidButton size="xl" className="text-white/80 font-medium tracking-wide" onClick={goToContact}>
            Book Free Consultation
          </LiquidButton>
        </div>
      </div>
    </section>
  )
}
