import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const portfolioItems = [
  {
    id: 1,
    company: 'TechVenture Labs',
    title: 'Complete Brand Overhaul',
    description: 'Redesigned brand identity and launched digital marketing campaign. Increased brand awareness by 250% and generated 500+ qualified leads in first quarter.',
    category: 'Digital Marketing, Branding',
    color: 'from-black-secondary to-black-tertiary',
  },
  {
    id: 2,
    company: 'ShopFlow Commerce',
    title: 'E-Commerce Platform Build',
    description: 'Built custom e-commerce platform with AI recommendations. Improved conversion rate by 180% and achieved $2M in first year sales.',
    category: 'Web Development, UX Design',
    color: 'from-grey-light to-white',
  },
  {
    id: 3,
    company: 'Wellness Global',
    title: 'PR & Media Launch',
    description: 'Orchestrated PR campaign securing 50+ media mentions. Featured in Forbes, TechCrunch, and Wall Street Journal with 10M+ impressions.',
    category: 'PR, Communications',
    color: 'from-grey-dark to-grey-dark',
  },
  {
    id: 4,
    company: 'FinanceHub Mobile',
    title: 'iOS & Android App',
    description: 'Developed native mobile banking app with 50K+ downloads. Achieved 4.8 star rating and processed $100M+ in transactions.',
    category: 'App Development, Strategy',
    color: 'from-black-secondary to-black-tertiary',
  },
  {
    id: 5,
    company: 'GrowthX Solutions',
    title: 'Marketing Automation',
    description: 'Implemented comprehensive marketing automation strategy. Generated 1000+ MQLs monthly and improved email ROI by 400%.',
    category: 'Digital Marketing, Analytics',
    color: 'from-grey-light to-white',
  },
  {
    id: 6,
    company: 'LuxeBrand Collective',
    title: 'Complete Visual Identity',
    description: 'Created comprehensive brand system with guidelines and assets. Launched across all channels with consistent premium positioning.',
    category: 'Design, Branding',
    color: 'from-grey-dark to-grey-dark',
  },
]

export default function Portfolio() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 bg-white">
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
            Recent Work
          </h2>
          <p className="text-grey-medium text-lg">
            Showcasing our latest and greatest projects
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group cursor-pointer relative overflow-hidden rounded-lg aspect-square"
            >
              {/* Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />

              {/* Content - Always Visible */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 bg-black/40">
                {/* Top - Company Name */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/70 mb-3">
                    {item.category}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {item.company}
                  </h3>
                </div>

                {/* Bottom - Description */}
                <motion.div
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm text-white/80 leading-relaxed">
                    {item.title}
                  </p>
                  <p className="text-xs text-white/60 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Border Accent */}
              <motion.div
                className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
