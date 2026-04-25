import { useEffect, useRef } from 'react'

export default function ParticleNetwork() {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const animationFrameRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let particles = []

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.15 // Reduced speed
        this.vy = (Math.random() - 0.5) * 0.15 // Reduced speed
        this.size = Math.random() * 1.5 + 0.3 // 0.3 to 1.8, smaller
        this.opacity = Math.random() * 0.12 + 0.04 // 0.04 to 0.16, much more subtle
        this.maxOpacity = this.opacity
        this.age = 0
        this.lifetime = Math.random() * 10000 + 6000 // 6-16 seconds, slower appearance/disappearance
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.age += 1000 / 60 // ~16ms per frame at 60fps

        // Fade out near end of life
        const fadeStart = this.lifetime * 0.7
        if (this.age > fadeStart) {
          const fadeProgress = (this.age - fadeStart) / (this.lifetime - fadeStart)
          this.opacity = this.maxOpacity * (1 - fadeProgress)
        }

        // Wrap around edges
        if (this.x < -10) this.x = canvas.width + 10
        if (this.x > canvas.width + 10) this.x = -10
        if (this.y < -10) this.y = canvas.height + 10
        if (this.y > canvas.height + 10) this.y = -10

        return this.age < this.lifetime
      }

      draw() {
        ctx.fillStyle = `rgba(10, 10, 10, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add new particles randomly (less frequently, fewer total)
      if (Math.random() < 0.06 && particles.length < 20) {
        particles.push(new Particle())
      }

      // Update and draw particles
      particles = particles.filter((p) => p.update())

      particles.forEach((p) => p.draw())

      // Draw connections between nearby particles
      const connectionDistance = 100
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            // Line opacity based on distance - much more subtle
            const lineOpacity = (1 - distance / connectionDistance) * 0.04
            ctx.strokeStyle = `rgba(10, 10, 10, ${lineOpacity})`

            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      particlesRef.current = particles
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameRef.current)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        display: 'block',
        pointerEvents: 'none',
        filter: 'blur(0.4px)',
      }}
    />
  )
}
