import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What makes Prasar PR different from traditional agencies?',
    a: 'We combine branding, strategic communication, public relations, digital storytelling, and marketing into integrated growth-focused solutions.',
  },
  {
    q: 'Do you only provide PR services?',
    a: 'No. Along with PR, we also provide branding, marketing communication, social media management, campaign strategy, and digital communication services.',
  },
  {
    q: 'Do you work with startups and emerging brands?',
    a: 'Yes. We work with startups, organizations, institutions, public leaders, and growing brands across different sectors.',
  },
  {
    q: 'Can you manage social media communication?',
    a: 'Yes. We provide social media strategy, content planning, campaign execution, and audience engagement solutions.',
  },
  {
    q: 'Do you provide political communication services?',
    a: 'Yes. We offer campaign communication, constituency outreach, narrative-building, and public engagement solutions.',
  },
  {
    q: 'Is the first consultation free?',
    a: 'Yes. Your first consultation with our team is absolutely free.',
  },
  {
    q: 'Can communication strategies be customized?',
    a: 'Absolutely. Every brand and organization has unique goals, audiences, and communication challenges.',
  },
  {
    q: 'Do you provide crisis communication support?',
    a: 'Yes. We help organizations and brands manage communication during sensitive or high-pressure situations.',
  },
  {
    q: 'How quickly can projects begin?',
    a: 'Depending on the project scope, campaigns and communication strategies can begin shortly after the consultation process.',
  },
  {
    q: 'Do you offer long-term communication support?',
    a: 'Yes. We work on both short-term campaigns and long-term communication partnerships.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
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
    <section id="faq" ref={ref} className="bg-pearl py-28 md:py-36 px-6">
      <div className="max-w-content mx-auto">

        <div className="max-w-xl mb-16 md:mb-20">
          <p className="fade-in-up text-ochre text-xs tracking-widest uppercase font-body font-medium mb-4">
            FAQ
          </p>
          <h2 className="fade-in-up font-display text-3xl md:text-4xl text-navy font-semibold leading-snug" style={{ transitionDelay: '80ms' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="fade-in-up border-b border-navy/10"
              style={{ transitionDelay: `${100 + i * 50}ms` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-5 flex justify-between items-start gap-4 bg-transparent border-none cursor-pointer"
              >
                <span className="font-display text-base md:text-lg text-navy font-medium leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 mt-1 text-ochre transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <p className="font-body text-charcoal/70 text-sm leading-relaxed pb-5 pr-8">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
