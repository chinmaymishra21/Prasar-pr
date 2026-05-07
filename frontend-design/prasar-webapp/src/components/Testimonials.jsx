import { motion } from 'motion/react'
import { TestimonialsColumn } from './ui/testimonials-columns-1'

const testimonials = [
  {
    text: "Prasar PR transformed our hospital's public image across Raipur. Their institutional narrative design helped us rebuild genuine community trust after a very challenging period.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Dr. Ananya Sharma",
    role: "Medical Director, Apex Hospital",
  },
  {
    text: "Their media relations team secured consistent coverage in leading Hindi and English dailies. Our political outreach improved measurably within weeks of engagement.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Rajiv Gupta",
    role: "Political Communications Advisor",
  },
  {
    text: "The grassroots trust integration strategy Prasar built for our NGO was exceptional. Communities responded to our messaging in ways we had never experienced before.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Priya Mehta",
    role: "Executive Director, Sewa Foundation",
  },
  {
    text: "Prasar PR's crisis communication support during our NAAC accreditation review was invaluable. Precise, discreet, and genuinely effective under pressure.",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "Dr. Suresh Nair",
    role: "Principal, Heritage College",
  },
  {
    text: "Their community engagement strategy increased our school's enrolment inquiries by over 40%. Parents now understand and trust our institution's story completely.",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    name: "Kavita Sharma",
    role: "Director, Lotus Public School",
  },
  {
    text: "Working with Prasar on brand reputation was transformative. They don't manufacture noise — they build institutional credibility that genuinely holds over time.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Rohit Sinha",
    role: "Head of Corporate Communications",
  },
  {
    text: "Their political communications expertise helped our candidate connect authentically with communities across Chhattisgarh. The hyper-local approach was a complete revelation.",
    image: "https://randomuser.me/api/portraits/men/63.jpg",
    name: "Manish Tiwari",
    role: "Campaign Manager, Assembly Elections",
  },
  {
    text: "Prasar's narrative design gave our healthcare brand a consistent voice that resonates with both patients and clinical staff. It changed how we communicate entirely.",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
    name: "Dr. Pooja Agarwal",
    role: "Director, Lifeline Diagnostics",
  },
  {
    text: "The media counsel was precise and strategic. Every press interaction was orchestrated with a clarity of purpose I had not seen from any PR agency before.",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    name: "Vikram Joshi",
    role: "VP Corporate Affairs, Meridian Group",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export default function Testimonials() {
  return (
    <section className="bg-pearl py-28 md:py-36 px-6 relative overflow-hidden">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-xl mx-auto mb-16"
        >
          <p className="text-ochre text-xs tracking-widest uppercase font-body font-medium mb-4">
            Client Voices
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-navy font-semibold leading-snug mb-5">
            Trusted by institutions<br className="hidden md:block" /> that shape communities.
          </h2>
          <p className="font-body text-charcoal/70 text-base leading-relaxed">
            From healthcare and education to civic leadership and political communication — here is what our clients say.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} duration={19} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
