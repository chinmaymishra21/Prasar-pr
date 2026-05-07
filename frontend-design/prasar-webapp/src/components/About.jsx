import { useEffect, useRef } from 'react'

// Placeholder portrait images — editorial/muted style
const founders = [
  {
    name: 'Praharsh Bhuwal',
    role: 'Founder',
    bio: 'With 3+ years in PR across corporate, healthcare, entertainment, and automobile sectors, Praharsh has built strong media relations from the ground up — beginning at Tata Steel Foundation and BSP Plant Bhilai, to leading Prasar PR with a vision to become Chhattisgarh\'s foremost PR firm and grow to a global platform.',
    img: '/praharsh.png',
  },
  {
    name: 'Kunal Dhar Diwan',
    role: 'Founder',
    bio: 'A law graduate turned communications strategist, Kunal brings a rare blend of legal precision and political field experience — including serving as Lok Sabha Incharge — to advise hospitals, schools, and political parties. His approach converts local loyalty into lasting, legally-grounded reputations.',
    img: '/kunal.png',
  },
  {
    name: 'Kartik Bhagchandani',
    role: 'Founder',
    bio: 'Kartik builds structured, insight-driven communication frameworks that help political leaders, organisations, and emerging brands build credibility, mobilise support, and sustain long-term public trust — not just momentary visibility.',
    img: '/kartik.png',
  },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="the-brain-trust" ref={ref} className="bg-navy pt-28 md:pt-36 pb-16 px-6">
      <div className="max-w-content mx-auto">

        {/* Intro */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="fade-in-up text-ochre text-xs tracking-widest uppercase font-body font-medium mb-4">
            The Brain Trust
          </p>
          <h2 className="fade-in-up font-display text-3xl md:text-4xl text-white font-semibold leading-snug mb-6" style={{ transitionDelay: '80ms' }}>
            Three founding partners. One shared belief.
          </h2>
          <p className="fade-in-up font-body text-white/70 text-base leading-relaxed" style={{ transitionDelay: '140ms' }}>
            Prasar PR was founded by three communications professionals who each brought a distinct discipline — and shared a conviction that institutional credibility cannot be manufactured. It must be cultivated, with patience, precision, and genuine community understanding.
          </p>
        </div>

        {/* Founder grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {founders.map((f, i) => (
            <div
              key={i}
              className="fade-in-up group"
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              {/* Photo — desaturated */}
              <div className="w-full aspect-[2/3] overflow-hidden mb-6 bg-white/10">
                <img
                  src={f.img}
                  alt={f.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-[50%]"
                />
              </div>
              {/* Text */}
              <div className="border-l-2 border-ochre pl-5">
                <h3 className="font-display text-lg text-white font-semibold leading-snug mb-1">
                  {f.name}
                </h3>
                <p className="font-body text-ochre text-xs tracking-wide uppercase mb-3">
                  {f.role}
                </p>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {f.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
