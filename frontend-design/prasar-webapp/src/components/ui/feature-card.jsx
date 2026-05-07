import { Phone } from 'lucide-react'
import { Warp } from '@paper-design/shaders-react'

export function FeatureCard({ title, description, items = [], buttonText, onButtonClick }) {
  return (
    <div className="relative rounded-2xl overflow-hidden h-full flex flex-col">
      {/* Animated shader background */}
      <div className="absolute inset-0">
        <Warp
          style={{ height: '100%', width: '100%' }}
          proportion={0.4}
          softness={1.0}
          distortion={0.18}
          swirl={0.8}
          swirlIterations={12}
          shape="dots"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={2.5}
          colors={['hsl(220, 60%, 12%)', 'hsl(220, 80%, 28%)', 'hsl(35, 70%, 45%)', 'hsl(35, 90%, 60%)']}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 p-8 h-full flex flex-col bg-navy/65 border border-white/10 backdrop-blur-sm rounded-2xl">
        <h3 className="font-display text-xl text-white font-semibold mb-3 leading-snug">
          {title}
        </h3>
        <p className="font-body text-white/60 text-sm leading-relaxed mb-8">
          {description}
        </p>

        <ul className="space-y-3 flex-grow mb-8">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-ochre mt-0.5" />
              <span className="font-body text-sm text-white/80">{item}</span>
            </li>
          ))}
        </ul>

        {buttonText && (
          <CallButton onClick={onButtonClick}>{buttonText}</CallButton>
        )}
      </div>
    </div>
  )
}

function CallButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative w-full h-12 rounded-full overflow-hidden group"
    >
      {/* Shader layer */}
      <div className="absolute inset-0">
        <Warp
          style={{ height: '100%', width: '100%' }}
          proportion={0.5}
          softness={0.8}
          distortion={0.25}
          swirl={1.2}
          swirlIterations={16}
          shape="dots"
          shapeScale={0.15}
          scale={1}
          rotation={0}
          speed={4}
          colors={['hsl(35, 90%, 50%)', 'hsl(35, 70%, 40%)', 'hsl(220, 80%, 30%)', 'hsl(220, 60%, 15%)']}
        />
      </div>

      {/* Liquid glass overlay */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.14) 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.2), 0 4px 16px rgba(0,0,0,0.3)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255,255,255,0.25)',
        }}
      />

      {/* Hover shimmer */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)' }}
      />

      {/* Label */}
      <div className="relative z-10 flex items-center justify-center gap-2">
        <Phone className="w-4 h-4 text-white drop-shadow" />
        <span className="font-body font-semibold text-sm text-white tracking-wide drop-shadow">
          {children}
        </span>
      </div>
    </button>
  )
}
