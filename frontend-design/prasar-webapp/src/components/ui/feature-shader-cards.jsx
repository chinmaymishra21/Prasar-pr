import { Warp } from '@paper-design/shaders-react'
import {
  Shield,
  Users,
  Zap,
  BookOpen,
  Radio,
  Heart,
  Globe,
  Landmark,
} from 'lucide-react'

const services = [
  {
    title: 'Brand Strategy & Positioning',
    for: 'Brand positioning · Messaging strategy · Audience identity · Reputation building',
    body: 'We help brands define how they are perceived, remembered, and trusted through strategic communication and audience-focused branding.',
    icon: <Shield className="w-10 h-10 text-white" />,
  },
  {
    title: 'Public Relations & Media Communication',
    for: 'Media outreach · Press coverage · Founder profiling · Reputation management',
    body: 'Strategic media communication designed to build visibility, credibility, and meaningful public presence.',
    icon: <Radio className="w-10 h-10 text-white" />,
  },
  {
    title: 'Social Media & Digital Communication',
    for: 'Social media management · Content strategy · Campaign execution · Digital storytelling',
    body: 'Modern digital communication focused on storytelling, audience engagement, and sustainable platform growth.',
    icon: <Globe className="w-10 h-10 text-white" />,
  },
  {
    title: 'Marketing & Campaign Strategy',
    for: 'Campaign planning · Brand campaigns · Audience targeting · Strategic promotions',
    body: 'Integrated campaigns designed to strengthen brand presence and audience connection across platforms.',
    icon: <Zap className="w-10 h-10 text-white" />,
  },
  {
    title: 'Political & Public Communication',
    for: 'Public narrative building · Campaign messaging · Constituency communication',
    body: 'Communication strategies built for public leaders, campaigns, and constituency engagement.',
    icon: <Landmark className="w-10 h-10 text-white" />,
  },
  {
    title: 'Corporate Communication',
    for: 'Internal communication · Leadership positioning · Crisis communication',
    body: 'Structured communication solutions for organizations, leadership teams, and institutions.',
    icon: <Users className="w-10 h-10 text-white" />,
  },
  {
    title: 'Creative Branding & Storytelling',
    for: 'Creative direction · Visual branding · Campaign creatives · Brand storytelling',
    body: 'Creative execution designed to strengthen visual identity, audience recall, and brand storytelling.',
    icon: <Heart className="w-10 h-10 text-white" />,
  },
]

const shaderConfigs = [
  {
    proportion: 0.3,
    softness: 0.8,
    distortion: 0.15,
    swirl: 0.6,
    swirlIterations: 8,
    shape: 'checks',
    shapeScale: 0.08,
    colors: ['hsl(220, 60%, 12%)', 'hsl(220, 80%, 28%)', 'hsl(35, 70%, 45%)', 'hsl(35, 90%, 60%)'],
  },
  {
    proportion: 0.4,
    softness: 1.2,
    distortion: 0.2,
    swirl: 0.9,
    swirlIterations: 12,
    shape: 'dots',
    shapeScale: 0.12,
    colors: ['hsl(218, 55%, 10%)', 'hsl(215, 70%, 22%)', 'hsl(40, 65%, 40%)', 'hsl(40, 80%, 55%)'],
  },
  {
    proportion: 0.35,
    softness: 0.9,
    distortion: 0.18,
    swirl: 0.7,
    swirlIterations: 10,
    shape: 'checks',
    shapeScale: 0.1,
    colors: ['hsl(222, 65%, 14%)', 'hsl(222, 75%, 30%)', 'hsl(32, 75%, 42%)', 'hsl(32, 90%, 58%)'],
  },
  {
    proportion: 0.45,
    softness: 1.1,
    distortion: 0.22,
    swirl: 0.8,
    swirlIterations: 15,
    shape: 'dots',
    shapeScale: 0.09,
    colors: ['hsl(216, 58%, 11%)', 'hsl(218, 72%, 25%)', 'hsl(38, 68%, 44%)', 'hsl(38, 85%, 60%)'],
  },
  {
    proportion: 0.38,
    softness: 0.95,
    distortion: 0.16,
    swirl: 0.85,
    swirlIterations: 11,
    shape: 'checks',
    shapeScale: 0.11,
    colors: ['hsl(220, 62%, 13%)', 'hsl(220, 78%, 26%)', 'hsl(36, 72%, 43%)', 'hsl(36, 88%, 57%)'],
  },
  {
    proportion: 0.42,
    softness: 1.0,
    distortion: 0.19,
    swirl: 0.75,
    swirlIterations: 9,
    shape: 'dots',
    shapeScale: 0.13,
    colors: ['hsl(217, 56%, 12%)', 'hsl(219, 74%, 24%)', 'hsl(34, 66%, 41%)', 'hsl(34, 82%, 56%)'],
  },
]

export default function FeatureShaderCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {services.map((service, index) => {
        const cfg = shaderConfigs[index % shaderConfigs.length]
        return (
          <div key={service.title} className="relative h-80">
            {/* Shader background */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Warp
                style={{ height: '100%', width: '100%' }}
                proportion={cfg.proportion}
                softness={cfg.softness}
                distortion={cfg.distortion}
                swirl={cfg.swirl}
                swirlIterations={cfg.swirlIterations}
                shape={cfg.shape}
                shapeScale={cfg.shapeScale}
                scale={1}
                rotation={0}
                speed={2.5}
                colors={cfg.colors}
              />
            </div>

            {/* Card content */}
            <div className="relative z-10 p-7 rounded-2xl h-full flex flex-col bg-navy/65 border border-white/10 backdrop-blur-sm">
              <div className="mb-4 drop-shadow-lg">{service.icon}</div>

              <h3 className="font-display text-lg font-semibold text-white mb-1 leading-snug">
                {service.title}
              </h3>

              <p className="font-body text-ochre/80 text-xs tracking-wide uppercase mb-3">
                {service.for}
              </p>

              <p className="font-body text-white/70 text-sm leading-relaxed flex-grow">
                {service.body}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
