import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check } from 'lucide-react'
import { LiquidButton } from './ui/liquid-glass-button'

const pricingPlans = [
  {
    name: 'Startup',
    description: 'Perfect for new ventures',
    price: 2999,
    featured: false,
    features: [
      'Digital Marketing Strategy',
      'Social Media Management (2 platforms)',
      'Basic SEO Optimization',
      'Monthly Analytics Report',
      'Email Support',
    ],
  },
  {
    name: 'Growth',
    description: 'For scaling businesses',
    price: 6999,
    featured: true,
    badge: 'Most Popular',
    features: [
      'Everything in Startup +',
      'Comprehensive PR Strategy',
      'Social Media Management (5 platforms)',
      'Content Creation (4 pieces/month)',
      'Paid Advertising Campaign',
      'Priority Support',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For enterprises',
    price: 12999,
    featured: false,
    features: [
      'Everything in Growth +',
      'Website/App Development',
      'Dedicated Account Manager',
      'Advanced Analytics & Reporting',
      'Crisis Management Support',
      '24/7 Premium Support',
    ],
  },
]

export default function Pricing() {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="pricing" className="py-20 md:py-32 px-6 bg-white">
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
            Transparent Pricing
          </h2>
          <p className="text-grey-medium text-lg">
            Choose the package that fits your needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8 items-center"
        >
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={plan.featured ? { scale: 1.05 } : { y: -8 }}
              className={`relative rounded-lg transition-all duration-300 ${
                plan.featured
                  ? 'md:scale-105 p-8 bg-gradient-to-br from-black-secondary to-black-tertiary text-white shadow-2xl'
                  : 'p-8 bg-gradient-to-br from-white to-grey-light border border-grey-light hover:border-black-primary'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-6 px-4 py-1 bg-black-primary text-white text-xs font-bold rounded-full uppercase tracking-widest"
                >
                  {plan.badge}
                </motion.div>
              )}

              {/* Content */}
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold mb-2">
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.featured ? 'text-white/70' : 'text-grey-medium'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <motion.div
                className={`mb-8 pb-8 border-b ${plan.featured ? 'border-white/20' : 'border-grey-light'}`}
              >
                <div className="flex items-baseline gap-1">
                  <span className={`text-base ${plan.featured ? 'text-white/60' : 'text-grey-medium'}`}>
                    $
                  </span>
                  <motion.span
                    className="font-display text-5xl font-bold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {plan.price.toLocaleString()}
                  </motion.span>
                  <span className={`text-sm ${plan.featured ? 'text-white/60' : 'text-grey-medium'}`}>
                    /month
                  </span>
                </div>
              </motion.div>

              {/* Features */}
              <motion.ul
                className="space-y-3 mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
              >
                {plan.features.map((feature, j) => (
                  <motion.li
                    key={j}
                    variants={itemVariants}
                    className="flex items-start gap-3 text-sm"
                  >
                    <Check size={18} className="mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA Button */}
              <LiquidButton
                size="lg"
                className={`w-full font-semibold tracking-wide ${
                  plan.featured ? 'text-white' : 'text-black-primary'
                }`}
              >
                {plan.featured ? 'Get Started' : plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </LiquidButton>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
