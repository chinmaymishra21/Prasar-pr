import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    text: 'Prasar transformed our digital presence. Their strategic approach and creative execution delivered results beyond expectations. Exceptional partners.',
    author: 'Arjun Kumar',
    role: 'CEO, TechVenture',
    avatar: 'AK',
  },
  {
    text: 'Working with Prasar\'s PR team was a game-changer for our brand visibility. They understood our vision and executed flawlessly across all channels.',
    author: 'Sophia Patel',
    role: 'Founder, Luxury Goods Co.',
    avatar: 'SP',
  },
  {
    text: 'The web application they built is phenomenal. Fast, intuitive, and beautiful. Attention to detail and user experience is unmatched in the industry.',
    author: 'Michael Johnson',
    role: 'COO, FinTech Solutions',
    avatar: 'MJ',
  },
  {
    text: 'Prasar\'s digital marketing strategy increased our revenue by 300%. Their data-driven approach and creative campaigns are truly world-class.',
    author: 'Rajesh Singh',
    role: 'Founder, E-Commerce Plus',
    avatar: 'RS',
  },
  {
    text: 'Best investment we made for our brand. The team\'s expertise in PR and communications elevated our market position significantly.',
    author: 'Priya Sharma',
    role: 'Marketing Director, Fashion Corp',
    avatar: 'PS',
  },
  {
    text: 'From concept to launch, Prasar delivered a stunning mobile app. Their development team is professional, responsive, and incredibly talented.',
    author: 'David Chen',
    role: 'Founder, HealthTech Startup',
    avatar: 'DC',
  },
  {
    text: 'The branding and design work transformed our entire company image. We couldn\'t be happier with the creative excellence delivered.',
    author: 'Elena Rodriguez',
    role: 'CEO, Sustainability Co.',
    avatar: 'ER',
  },
  {
    text: 'Prasar\'s analytics and strategy consulting gave us the insights we needed to scale. Highly recommended for serious businesses.',
    author: 'James Wilson',
    role: 'VP Growth, SaaS Company',
    avatar: 'JW',
  },
  {
    text: 'Their social media campaigns generated massive engagement and real conversions. The ROI has been incredible and consistent.',
    author: 'Neha Gupta',
    role: 'Founder, Beauty Brand',
    avatar: 'NG',
  },
  {
    text: 'Working with Prasar felt like partnering with an extension of our own team. Seamless collaboration and exceptional results.',
    author: 'Marcus Thompson',
    role: 'CEO, Tech Consulting',
    avatar: 'MT',
  },
  {
    text: 'The website they designed is not just beautiful—it converts. We\'ve seen a 250% increase in lead generation since launch.',
    author: 'Lisa Anderson',
    role: 'Founder, Coaching Academy',
    avatar: 'LA',
  },
  {
    text: 'Prasar understood our brand story and communicated it perfectly to our target audience. Results spoke for themselves.',
    author: 'Ahmad Hassan',
    role: 'Director, Luxury Retail',
    avatar: 'AH',
  },
  {
    text: 'From strategy to execution, Prasar delivered excellence at every step. They\'re partners who truly care about your success.',
    author: 'Victoria Wells',
    role: 'CEO, Wellness Brand',
    avatar: 'VW',
  },
]

export default function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-20 md:py-32 px-6 bg-grey-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-grey-medium text-lg">
            Real feedback from real partners
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <style>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .marquee-content {
              display: flex;
              gap: 24px;
              animation: marquee 50s linear infinite;
              width: max-content;
            }

            .marquee-container:hover .marquee-content {
              animation-play-state: paused;
            }

            .marquee-container:hover .marquee-content {
              cursor: pointer;
            }
          `}</style>

          <div
            className="marquee-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="marquee-content">
              {/* First set of testimonials */}
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={`first-${i}`} testimonial={testimonial} />
              ))}
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={`second-${i}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>

        {/* Fade edges for smooth transition effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-grey-light to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-grey-light to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="flex-shrink-0 w-96 p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow"
    >
      {/* Quote */}
      <p className="text-grey-dark leading-relaxed mb-6 text-sm">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <motion.div
          className="w-12 h-12 bg-grey-dark text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
          whileHover={{ scale: 1.1 }}
        >
          {testimonial.avatar}
        </motion.div>
        <div className="min-w-0">
          <h4 className="font-semibold text-sm truncate">
            {testimonial.author}
          </h4>
          <p className="text-xs text-grey-medium truncate">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
