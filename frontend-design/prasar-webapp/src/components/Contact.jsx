import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { LiquidButton } from './ui/liquid-glass-button'
import { FeatureCard } from './ui/feature-card'

const EMAILJS_SERVICE_ID = 'service_67t3csz'
const EMAILJS_TEMPLATE_ID = 'template_vjpzixv'
const EMAILJS_PUBLIC_KEY = 'e6aZ8pMsfS1TVGRkz'

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({
    name: '', organisation: '', email: '', phone: '', message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [serverError, setServerError] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required.'
    if (!form.organisation.trim()) e.organisation = 'Organization / Brand is required.'
    if (!form.email.trim()) e.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.'
    if (!form.message.trim()) e.message = 'Please describe your requirement.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => { const n = { ...er }; delete n[name]; return n })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setSending(true)
    setServerError('')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          organisation: form.organisation,
          reply_to: form.email,
          phone: form.phone || '—',
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      const msg = err?.text || err?.message || JSON.stringify(err)
      setServerError(`Failed to send: ${msg}`)
    } finally {
      setSending(false)
    }
  }

  const fieldClass = (name) =>
    `w-full font-body text-sm text-charcoal bg-white border px-4 py-3 rounded transition-colors duration-200 placeholder-charcoal/30 focus:outline-none focus:border-ochre ${
      errors[name] ? 'border-red-400' : 'border-white/20 hover:border-white/40'
    }`

  return (
    <section id="contact" ref={ref} className="bg-navy py-28 md:py-36 px-6 min-h-screen">
      <div className="max-w-content mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-12">
          <div>
            <p className="fade-in-up text-ochre text-xs tracking-widest uppercase font-body font-medium mb-4">
              Contact
            </p>
            <h2 className="fade-in-up font-display text-3xl md:text-4xl text-white font-semibold leading-snug" style={{ transitionDelay: '80ms' }}>
              Let's Build Something People Remember
            </h2>
          </div>
          <div className="flex items-end">
            <div>
              <p className="fade-in-up font-body text-white/65 text-base leading-relaxed mb-3" style={{ transitionDelay: '140ms' }}>
                Whether you're growing a brand, building public trust, or scaling digital visibility — we help you communicate with clarity, strategy, and impact.
              </p>
              <p className="fade-in-up font-body text-ochre/80 text-sm" style={{ transitionDelay: '180ms' }}>
                ✔ First consultation absolutely free.
              </p>
            </div>
          </div>
        </div>

        {/* Two-column: card + form */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left — feature card */}
          <div className="fade-in-up relative z-0" style={{ transitionDelay: '200ms' }}>
            <FeatureCard
              title="What We Offer"
              description="Tailored communication strategies built around your brand, audience, and growth objectives."
              items={[
                'Brand Strategy & Positioning',
                'Public Relations & Media Communication',
                'Social Media & Digital Communication',
                'Marketing & Campaign Strategy',
                'Corporate Communication',
              ]}
              buttonText="Call Now!"
              onButtonClick={() => window.location.href = 'tel:+919399909236'}
            />
          </div>

          {/* Right — form */}
          <div className="fade-in-up" style={{ transitionDelay: '120ms' }}>
            {submitted ? (
              <div className="bg-white border border-navy/10 rounded p-10 text-center">
                <span className="text-ochre text-2xl mb-4 block">◆</span>
                <h3 className="font-display text-xl text-navy font-semibold mb-3">
                  Thank you.
                </h3>
                <p className="font-body text-charcoal/70 text-sm leading-relaxed">
                  We have received your message. We will review your enquiry and be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block font-body text-xs tracking-wide text-white/60 mb-1.5">
                      Full Name <span className="text-ochre">*</span>
                    </label>
                    <input
                      id="name" name="name" type="text" value={form.name}
                      onChange={handleChange} placeholder="Your full name"
                      className={fieldClass('name')}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500 font-body">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="organisation" className="block font-body text-xs tracking-wide text-white/60 mb-1.5">
                      Organization / Brand <span className="text-ochre">*</span>
                    </label>
                    <input
                      id="organisation" name="organisation" type="text" value={form.organisation}
                      onChange={handleChange} placeholder="Your organization or brand"
                      className={fieldClass('organisation')}
                    />
                    {errors.organisation && <p className="mt-1 text-xs text-red-500 font-body">{errors.organisation}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block font-body text-xs tracking-wide text-white/60 mb-1.5">
                      Email Address <span className="text-ochre">*</span>
                    </label>
                    <input
                      id="email" name="email" type="email" value={form.email}
                      onChange={handleChange} placeholder="you@yourbrand.com"
                      className={fieldClass('email')}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500 font-body">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-body text-xs tracking-wide text-white/60 mb-1.5">
                      Phone Number <span className="text-white/30">(optional)</span>
                    </label>
                    <input
                      id="phone" name="phone" type="tel" value={form.phone}
                      onChange={handleChange} placeholder="+91 98765 43210"
                      className={fieldClass('phone')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-xs tracking-wide text-white/60 mb-1.5">
                    Your Requirement <span className="text-ochre">*</span>
                  </label>
                  <textarea
                    id="message" name="message" rows={5} value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your brand and what you're looking to achieve."
                    className={`${fieldClass('message')} resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500 font-body">{errors.message}</p>}
                </div>

                <LiquidButton
                  type="submit"
                  size="lg"
                  disabled={sending}
                  className="w-full text-ochre font-medium tracking-wide disabled:opacity-60"
                >
                  {sending ? 'Sending…' : 'Send Enquiry'}
                </LiquidButton>

                {serverError && (
                  <p className="font-body text-xs text-red-500 text-center">{serverError}</p>
                )}

                <p className="font-body text-xs text-white/40 text-center leading-relaxed">
                  Your information is treated with complete discretion and will not be shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Email + Location */}
        <div className="fade-in-up mt-16 flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20" style={{ transitionDelay: '300ms' }}>
          <div className="text-center">
            <p className="font-body text-xs tracking-widest uppercase text-white/40 mb-1">Email</p>
            <a href="mailto:prasarpr02@gmail.com" className="font-body text-sm text-white/80 hover:text-ochre transition-colors duration-200">
              prasarpr02@gmail.com
            </a>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div className="text-center">
            <p className="font-body text-xs tracking-widest uppercase text-white/40 mb-1">Location</p>
            <p className="font-body text-sm text-white/70">Raipur, Chhattisgarh</p>
          </div>
        </div>

      </div>
    </section>
  )
}
