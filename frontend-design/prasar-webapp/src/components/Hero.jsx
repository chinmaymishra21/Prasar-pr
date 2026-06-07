import { Heart, Landmark, BookOpen, Building2, Briefcase, Newspaper, Globe, Users, ChevronDown } from 'lucide-react'
import { BeamsBackground } from './ui/beams-background'
import { LiquidButton } from './ui/liquid-glass-button'
import { SplineScene } from './ui/splite'
import { Spotlight } from './ui/spotlight'
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

export default function Hero() {
  const { lenisRef } = useScrollContext()

  const goToAbout = () => {
    const el = document.getElementById('about')
    if (el && lenisRef.current) lenisRef.current.scrollTo(el)
  }

  const goToContact = () => {
    const el = document.getElementById('contact')
    if (el && lenisRef.current) lenisRef.current.scrollTo(el)
  }

  return (
    <section id="home" className="relative w-full overflow-hidden">
      <BeamsBackground className="bg-pearl min-h-0 h-auto w-full" intensity="subtle">

        {/* Spotlight tracks entire hero section */}
        <Spotlight size={900} />

        {/* Static radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 40%, rgba(212,136,66,0.06) 0%, transparent 55%)' }}
        />

        {/* Two-column hero */}
        <div className="relative z-10 max-w-content mx-auto px-6 pt-32 pb-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 min-h-[88vh]">

          {/* ── Left: Text ── */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-ochre text-xs tracking-widest uppercase font-body mb-5 font-medium">
              Strategic Public Relations
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-navy leading-tight mb-6">
              Modern Communication For Brands That Want To Lead
            </h1>

            <p className="font-body text-charcoal/70 text-base md:text-lg leading-relaxed max-w-xl mb-8 font-light">
              We help brands, institutions, leaders, and organizations grow through strategic communication, branding, digital storytelling, and audience-driven marketing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <LiquidButton onClick={goToContact} size="lg" className="text-ochre font-medium tracking-wide">
                Start a Conversation
              </LiquidButton>
              <LiquidButton onClick={goToContact} size="lg" className="text-navy/80 font-medium tracking-wide">
                Book Free Consultation
              </LiquidButton>
            </div>

            <p className="font-body text-charcoal/50 text-sm">
              ✔ First consultation absolutely free.
            </p>
          </div>

          {/* ── Right: Robot — no card, floats on hero bg ── */}
          <div className="flex-1 w-full" style={{ height: '72vh', minHeight: '560px', maxHeight: '780px' }}>
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* ── Industries marquee ── */}
        <div className="relative z-10 w-full max-w-content mx-auto px-6 pb-10">
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
                    style={{ background: 'rgba(10,31,68,0.05)', border: '1px solid rgba(10,31,68,0.10)' }}
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

        {/* Scroll cue */}
        <div className="hidden md:flex justify-center pb-8 relative z-10">
          <button
            onClick={goToAbout}
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
