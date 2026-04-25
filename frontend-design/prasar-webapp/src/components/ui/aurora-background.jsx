import { cn } from "../../lib/utils";

// Tailwind color values used in the aurora gradient
const DARK_GRADIENT =
  "repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%)";
const AURORA =
  "repeating-linear-gradient(100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #ddd6fe 25%, #60a5fa 30%)";
const RADIAL_MASK =
  "radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%)";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  const maskStyle = showRadialGradient
    ? { maskImage: RADIAL_MASK, WebkitMaskImage: RADIAL_MASK }
    : {};

  return (
    <div
      className={cn(
        "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-900 text-slate-50 transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Static blurred base layer */}
        <div
          style={{
            backgroundImage: `${DARK_GRADIENT}, ${AURORA}`,
            backgroundSize: "300%, 200%",
            backgroundPosition: "50% 50%, 50% 50%",
            ...maskStyle,
          }}
          className="absolute -inset-[10px] opacity-50 will-change-transform blur-[10px] pointer-events-none"
        />
        {/* Animated overlay layer (replaces ::after) */}
        <div
          style={{
            backgroundImage: `${DARK_GRADIENT}, ${AURORA}`,
            backgroundSize: "200%, 100%",
            backgroundAttachment: "fixed",
            ...maskStyle,
          }}
          className="absolute -inset-[10px] opacity-50 will-change-transform aurora-animate mix-blend-difference pointer-events-none"
        />
      </div>
      {children}
    </div>
  );
};
