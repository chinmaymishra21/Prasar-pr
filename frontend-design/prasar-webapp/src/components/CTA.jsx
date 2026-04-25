import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { LiquidButton } from './ui/liquid-glass-button'

export default function CTA() {
  const { ref, inView } = useInView({
    threshold: 0.3,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-r from-black-primary via-black-secondary to-black-tertiary text-white relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)',
      }} />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="font-display text-4xl md:text-6xl font-bold mb-6"
        >
          Ready to Transform Your Brand?
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed"
        >
          Let's discuss how Prasar can help you achieve your business goals.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <LiquidButton
            size="xl"
            className="text-white font-bold tracking-wide"
          >
            Schedule a Consultation
          </LiquidButton>
          <LiquidButton
            size="xl"
            className="text-white font-bold tracking-wide"
          >
            View Case Studies
          </LiquidButton>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 border border-white/20 opacity-30"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
    </section>
  )
}
