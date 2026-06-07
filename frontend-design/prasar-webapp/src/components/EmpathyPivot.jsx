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
      id="about"
      ref={ref}
      className="bg-navy -mt-16 lg:-mt-24 py-28 md:py-36 px-6"
    >
      <div className="max-w-content mx-auto">
        <div className="max-w-3xl mx-auto text-center">

          {/* Section label */}
          <p className="fade-in-up text-ochre text-xs tracking-widest uppercase font-body font-medium mb-10">
            About Us
          </p>

          {/* Heading */}
          <h2 className="fade-in-up font-display text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-snug mb-10" style={{ transitionDelay: '80ms' }}>
            Communication Built Around Strategy, Trust &amp; Growth
          </h2>

          {/* Divider */}
          <div className="fade-in-up flex justify-center mb-10" style={{ transitionDelay: '160ms' }}>
            <span className="block w-12 h-px bg-ochre" />
          </div>

          {/* Body */}
          <p className="fade-in-up font-body text-white/80 text-lg leading-relaxed mb-6" style={{ transitionDelay: '200ms' }}>
            At Prasar PR, we believe communication is more than visibility — it is how brands build trust, shape perception, and create long-term growth.
          </p>
          <p className="fade-in-up font-body text-white/60 text-base leading-relaxed mb-6" style={{ transitionDelay: '260ms' }}>
            We work across branding, strategic communication, public relations, digital storytelling, and audience engagement to help organizations create meaningful and lasting impact.
          </p>
          <p className="fade-in-up font-body text-white/60 text-base leading-relaxed mb-6" style={{ transitionDelay: '300ms' }}>
            From emerging brands and institutions to public leaders and purpose-driven organizations, we develop communication systems that connect with audiences through clarity, relevance, and cultural understanding.
          </p>
          <p className="fade-in-up font-body text-white/60 text-base leading-relaxed" style={{ transitionDelay: '340ms' }}>
            Our approach combines strategic thinking with modern execution — blending communication strategy, branding, media relations, digital growth, and storytelling into campaigns that drive real influence and engagement.
          </p>
        </div>
      </div>
    </section>
  )
}
