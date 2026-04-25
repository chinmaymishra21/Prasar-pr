import { useEffect, useState } from 'react'
import { ChevronDown, Heart, Landmark, BookOpen, Building2, Briefcase, Newspaper, Globe, Users } from 'lucide-react'
import { ContainerScroll } from './ui/container-scroll-animation'
import { BeamsBackground } from './ui/beams-background'
import { LiquidButton } from './ui/liquid-glass-button'
import { useScrollContext } from './ui/smooth-scroll'

const INDUSTRIES = [
  { icon: Heart,     label: 'Healthcare' },
  { icon: Landmark,  label: 'Political' },
  { icon: BookOpen,  label: 'Education' },
  { icon: Building2, label: 'Civic' },
  { icon: Briefcase, label: 'Corporate' },
  { icon: Newspaper, label: 'Media' },
  { icon: Globe,     label: 'NGO' },
  { icon: Users,     label: 'Community' },
]

// Newspaper-style Prasar PR image for the 3D card
const CARD_IMAGE = '/ppr.png'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const { lenisRef } = useScrollContext()

  useEffect(() => {
    const img = new Image()
    img.src = CARD_IMAGE
    img.onload = () => setLoaded(true)
  }, [])

  const goToApproach = () => {
    const el = document.getElementById('our-approach')
    if (el && lenisRef.current) lenisRef.current.scrollTo(el)
  }

  const goToContact = () => {
    const el = document.getElementById('contact')
    if (el && lenisRef.current) lenisRef.current.scrollTo(el)
  }

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
    >
      <BeamsBackground className="bg-pearl min-h-0 h-auto w-full" intensity="subtle">
        {/* Subtle radial glow behind the content */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, rgba(212,136,66,0.08) 0%, transparent 60%)',
          }}
        />

        {/* ContainerScroll with hero content as title, image as card */}
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center pt-6 md:pt-0">
              {/* Eyebrow */}
              <p className="text-ochre text-xs tracking-widest uppercase font-body mb-6 font-medium">
                Strategic Public Relations
              </p>

              {/* Tagline */}
              <h1 className="font-display text-5xl md:text-6xl lg:text-[6.5rem] font-semibold text-navy leading-tight mb-6">
                Rooted in Trust.
              </h1>

              {/* Sub-headline */}
              <p className="font-body text-charcoal/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-light">
                Prasar PR architects institutional credibility for the healthcare, educational, and civic leaders who shape communities — not through noise, but through narrative precision.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <LiquidButton
                  onClick={goToContact}
                  size="lg"
                  className="text-ochre font-medium tracking-wide"
                >
                  Start a Conversation
                </LiquidButton>
                <LiquidButton
                  onClick={goToApproach}
                  size="lg"
                  className="text-navy/80 font-medium tracking-wide"
                >
                  Our Approach
                </LiquidButton>
              </div>

              {/* Industry dock — marquee */}
              <div className="w-full max-w-2xl mx-auto pb-3 md:pb-16">
                <p className="text-navy/30 text-[10px] tracking-widest uppercase font-body mb-3 text-center">
                  Sectors we serve
                </p>
                <div className="marquee-track w-full">
                  <div className="animate-marquee gap-2">
                    {[...INDUSTRIES, ...INDUSTRIES].map(({ icon: Icon, label }, i) => (
                      <div
                        key={`${label}-${i}`}
                        className="flex flex-col items-center gap-1.5 group cursor-default flex-shrink-0 mx-2"
                      >
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-ochre/10"
                          style={{
                            background: 'rgba(10,31,68,0.05)',
                            border: '1px solid rgba(10,31,68,0.10)',
                          }}
                        >
                          <Icon size={18} className="text-ochre/70 group-hover:text-ochre transition-colors duration-300" />
                        </div>
                        <span className="text-navy/40 text-[8px] tracking-wider uppercase font-body group-hover:text-navy/70 transition-colors duration-300">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          }
        >
          {/* Image inside the 3D rotating card */}
          <img
            src={CARD_IMAGE}
            alt="Prasar PR — The Chronicle Dispatch feature"
            className={`mx-auto rounded-2xl object-cover h-full w-full object-center transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            draggable={false}
          />
        </ContainerScroll>

        {/* Scroll cue — below the tablet card, hidden on mobile */}
        <div className="hidden md:flex justify-center pb-8 -mt-8 relative z-10">
          <button
            onClick={goToApproach}
            className="flex flex-col items-center gap-1.5 text-navy/50 hover:text-navy transition-colors duration-200 bg-transparent border-none cursor-pointer"
            aria-label="Scroll down"
          >
            <span className="text-[10px] tracking-widest uppercase font-body">Scroll</span>
            <ChevronDown size={15} className="animate-bounce" />
          </button>
        </div>

      </BeamsBackground>
    </section>
  )
}
