import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { LiquidButton } from './ui/liquid-glass-button'
import { ComboBox } from './ui/combo-box'

const EMAILJS_SERVICE_ID = 'service_67t3csz'
const EMAILJS_TEMPLATE_ID = 'template_vjpzixv'
const EMAILJS_PUBLIC_KEY = 'e6aZ8pMsfS1TVGRkz'

const ENQUIRY_OPTIONS = [
  'Reputation Architecture',
  'Grassroots Trust Integration',
  'Resilience Communication',
  'Institutional Narrative Design',
  'Media Relations & Counsel',
  'Community Engagement Strategy',
  'General Enquiry',
]

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({
    name: '', organisation: '', role: '', email: '', phone: '', enquiry: '', message: '',
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
    if (!form.organisation.trim()) e.organisation = 'Organisation is required.'
    if (!form.role.trim()) e.role = 'Your role is required.'
    if (!form.email.trim()) e.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.'
    if (!form.enquiry) e.enquiry = 'Please select a nature of enquiry.'
    if (!form.message.trim()) e.message = 'A brief message is required.'
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
          role: form.role,
          reply_to: form.email,
          phone: form.phone || '—',
          enquiry: form.enquiry,
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
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left — intro */}
          <div>
            <p className="fade-in-up text-ochre text-xs tracking-widest uppercase font-body font-medium mb-4">
              Contact
            </p>
            <h2 className="fade-in-up font-display text-3xl md:text-4xl text-white font-semibold leading-snug mb-6" style={{ transitionDelay: '80ms' }}>
              Start a Conversation.
            </h2>
            <p className="fade-in-up font-body text-white/65 text-base leading-relaxed mb-10" style={{ transitionDelay: '140ms' }}>
              We work with a select group of clients whose institutions and objectives align with our expertise. If you believe Prasar PR may be the right partner, we would welcome the conversation.
            </p>
            <div className="fade-in-up space-y-4" style={{ transitionDelay: '200ms' }}>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-white/40 mb-1">Email</p>
                <a href="mailto:prasarpr02@gmail.com" className="font-body text-sm text-white/80 hover:text-ochre transition-colors duration-200">
                  prasarpr02@gmail.com
                </a>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-white/40 mb-1">Location</p>
                <p className="font-body text-sm text-white/70">New Delhi, India</p>
              </div>
            </div>
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

                {/* Honeypot */}
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
                      Organisation <span className="text-ochre">*</span>
                    </label>
                    <input
                      id="organisation" name="organisation" type="text" value={form.organisation}
                      onChange={handleChange} placeholder="Your institution or organisation"
                      className={fieldClass('organisation')}
                    />
                    {errors.organisation && <p className="mt-1 text-xs text-red-500 font-body">{errors.organisation}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="role" className="block font-body text-xs tracking-wide text-white/60 mb-1.5">
                      Role / Designation <span className="text-ochre">*</span>
                    </label>
                    <input
                      id="role" name="role" type="text" value={form.role}
                      onChange={handleChange} placeholder="Your role"
                      className={fieldClass('role')}
                    />
                    {errors.role && <p className="mt-1 text-xs text-red-500 font-body">{errors.role}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body text-xs tracking-wide text-white/60 mb-1.5">
                      Email Address <span className="text-ochre">*</span>
                    </label>
                    <input
                      id="email" name="email" type="email" value={form.email}
                      onChange={handleChange} placeholder="you@institution.com"
                      className={fieldClass('email')}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500 font-body">{errors.email}</p>}
                  </div>
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

                <div>
                  <label className="block font-body text-xs tracking-wide text-white/60 mb-1.5">
                    Nature of Enquiry <span className="text-ochre">*</span>
                  </label>
                  <ComboBox
                    name="enquiry"
                    options={ENQUIRY_OPTIONS}
                    value={form.enquiry}
                    onChange={handleChange}
                    placeholder="Select an area of interest…"
                    error={!!errors.enquiry}
                  />
                  {errors.enquiry && <p className="mt-1 text-xs text-red-500 font-body">{errors.enquiry}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-xs tracking-wide text-white/60 mb-1.5">
                    Message / Brief <span className="text-ochre">*</span>
                  </label>
                  <textarea
                    id="message" name="message" rows={5} value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your institution and the communication challenge you are navigating."
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
      </div>
    </section>
  )
}
