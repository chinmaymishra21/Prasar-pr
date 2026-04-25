import { BeamsBackground } from './ui/beams-background'
import { useScrollContext } from './ui/smooth-scroll'

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Our Approach', id: 'our-approach' },
  { label: 'Strategic Solutions', id: 'strategic-solutions' },
  { label: 'The Brain Trust', id: 'the-brain-trust' },
  { label: 'Contact', id: 'contact' },
]

// Minimal SVG social icons
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

export default function Footer() {
  const { lenisRef } = useScrollContext()

  const goTo = (id) => {
    const el = document.getElementById(id)
    if (el && lenisRef.current) lenisRef.current.scrollTo(el)
  }

  return (
    <footer>
      <BeamsBackground className="bg-pearl min-h-0 h-auto pt-16 pb-8 px-6" intensity="subtle">
        <div className="max-w-content mx-auto w-full text-navy">

          {/* Three-column layout */}
          <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-navy/10">

            {/* Col 1 — Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img src="/prasar-logo-new.svg" alt="" className="h-7 w-7" aria-hidden="true" />
                <span className="font-display font-semibold tracking-widest text-sm text-navy">PRASAR PR</span>
              </div>
              <p className="font-body text-charcoal/70 text-sm leading-relaxed max-w-xs mb-2">
                Rooted in Trust.
              </p>
              <p className="font-body text-charcoal/50 text-xs leading-relaxed max-w-xs">
                Strategic public relations for healthcare, educational, and civic institutions.
              </p>
            </div>

            {/* Col 2 — Links */}
            <div>
              <h4 className="font-body text-xs tracking-widest uppercase text-charcoal/40 mb-5">Navigation</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => goTo(link.id)}
                      className="font-body text-sm text-charcoal/65 hover:text-navy transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Contact + Social */}
            <div>
              <h4 className="font-body text-xs tracking-widest uppercase text-charcoal/40 mb-5">Contact</h4>
              <a
                href="mailto:prasarpr02@gmail.com"
                className="font-body text-sm text-charcoal/65 hover:text-ochre transition-colors duration-200 block mb-6"
              >
                prasarpr02@gmail.com
              </a>
              <p className="font-body text-xs text-charcoal/50 mb-5">New Delhi, India</p>

              {/* Social — icon only */}
              <div className="flex items-center gap-5">
                <a href="https://www.instagram.com/prasarpr?igsh=eTh0cXljcGs2MXh3" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-navy/40 hover:text-navy transition-colors duration-200">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="font-body text-xs text-charcoal/35">
              &copy; {new Date().getFullYear()} Prasar PR. All rights reserved.
            </p>
            <div className="flex gap-5">
              <a href="#" className="font-body text-xs text-charcoal/35 hover:text-charcoal/65 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="font-body text-xs text-charcoal/35 hover:text-charcoal/65 transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </BeamsBackground>
    </footer>
  )
}
