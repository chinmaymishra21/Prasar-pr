import { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const ScrollContext = createContext({ wrapperRef: { current: null }, lenisRef: { current: null } });

export function useScrollContext() {
  return useContext(ScrollContext);
}

export default function SmoothScroll({ children }) {
  const wrapperRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const lenis = new Lenis({
      wrapper: wrapper,
      content: wrapper.firstElementChild,
      lerp: 0.08,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ wrapperRef, lenisRef }}>
      <div
        ref={wrapperRef}
        style={{ height: '100vh', overflow: 'auto', position: 'relative' }}
      >
        <div>{children}</div>
      </div>
    </ScrollContext.Provider>
  );
}

/**
 * StackSection — wraps a section for the sticky card-stack scroll effect.
 *
 * The sticky card pins at the top. Content taller than the viewport scrolls
 * upward via transform. Once the content is fully scrolled, the card gently
 * scales back to signal completion before the next section slides over it.
 */
export function StackSection({ children, zIndex = 10, showRounded = true, stickyTop = 0, scrollSpeed = 1 }) {
  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const contentRef = useRef(null);
  const spacerRef = useRef(null);
  const overflowRef = useRef(0);
  const wrapperTopCacheRef = useRef(null);

  // Measure content overflow and set spacer height
  useEffect(() => {
    const content = contentRef.current;
    const spacer = spacerRef.current;
    if (!content || !spacer) return;

    const measure = () => {
      const contentHeight = content.scrollHeight;
      const vh = window.innerHeight;
      const overflow = Math.max(0, contentHeight - vh);
      overflowRef.current = overflow;

      // Scroll distance for content animation + one viewport for the "completion
      // dwell" where the next card slides over this one.
      const scrollDistance = Math.ceil(overflow / scrollSpeed);
      spacer.style.height = `${scrollDistance + vh}px`;
      wrapperTopCacheRef.current = null;
    };

    measure();
    window.addEventListener('resize', measure);
    const images = content.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.complete) img.addEventListener('load', measure, { once: true });
    });

    return () => window.removeEventListener('resize', measure);
  }, [scrollSpeed]);

  // Drive content scroll + completion scale
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    const sticky = stickyRef.current;
    if (!wrapper || !content || !sticky) return;

    let scrollContainer = wrapper.parentElement;
    while (scrollContainer && scrollContainer !== document.documentElement) {
      const ov = getComputedStyle(scrollContainer).overflowY;
      if (ov === 'auto' || ov === 'scroll') break;
      scrollContainer = scrollContainer.parentElement;
    }
    const scrollTarget = scrollContainer || window;

    const handleScroll = () => {
      const overflow = overflowRef.current;
      const vh = window.innerHeight;

      const scrollTop = scrollTarget === window ? window.scrollY : scrollTarget.scrollTop;

      if (wrapperTopCacheRef.current === null) {
        wrapperTopCacheRef.current = wrapper.offsetTop;
      }

      const scrolledInto = Math.max(0, scrollTop - wrapperTopCacheRef.current);
      const contentScrollDist = overflow > 0 ? overflow / scrollSpeed : 0;

      // Content translate: 0 → -overflow as user scrolls through contentScrollDist px
      if (overflow > 0) {
        const progress = Math.min(scrolledInto / contentScrollDist, 1);
        content.style.transform = `translateY(${-progress * overflow}px)`;
      }

      // Completion animation: once content is done scrolling, gently scale the
      // card back over the remaining dwell distance (the extra vh in the spacer).
      // This gives a clear "this section is done" signal before the next card slides in.
      const dwellScrolledInto = Math.max(0, scrolledInto - contentScrollDist);
      // Use 70% of vh as the completion zone so the effect finishes before the
      // next card fully covers this one.
      const completionProgress = Math.min(dwellScrolledInto / (vh * 0.7), 1);

      // Scale: 1 → 0.96, border-radius grows slightly for a "receding card" feel
      const scale = 1 - 0.04 * completionProgress;
      sticky.style.transform = `scale(${scale})`;
      sticky.style.transformOrigin = 'top center';
    };

    scrollTarget.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount so the initial state is correct
    handleScroll();
    return () => scrollTarget.removeEventListener('scroll', handleScroll);
  }, [scrollSpeed]);

  return (
    <div ref={wrapperRef}>
      <div
        ref={stickyRef}
        className={`sticky h-screen overflow-hidden will-change-transform ${
          showRounded
            ? 'rounded-t-3xl shadow-[0_-12px_40px_rgba(0,0,0,0.18),0_-4px_16px_rgba(0,0,0,0.10)]'
            : ''
        }`}
        style={{ zIndex, top: stickyTop }}
      >
        <div ref={contentRef} className="will-change-transform min-h-screen">
          {children}
        </div>
      </div>
      {/* Spacer provides scroll distance so position:sticky has room to pin */}
      <div ref={spacerRef} />
    </div>
  );
}
