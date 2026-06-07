// components/ui/navigation-menu.jsx
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollContext } from "./smooth-scroll";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "strategic-solutions" },
  { name: "The Brain Trust", id: "the-brain-trust" },
  { name: "Contact", id: "contact" },
];

const EXPAND_SCROLL_THRESHOLD = 80;

// ── Desktop pill variants ──────────────────────────────────────────────────

const containerVariants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: "auto",
    transition: {
      y: { type: "spring", damping: 18, stiffness: 250 },
      opacity: { duration: 0.3 },
      type: "spring",
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  collapsed: {
    y: 0,
    opacity: 1,
    width: "3rem",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const logoVariants = {
  expanded: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", damping: 15 } },
  collapsed: { opacity: 0, x: -25, scale: 0.8, transition: { duration: 0.25 } },
};

const itemVariants = {
  expanded: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", damping: 15 } },
  collapsed: { opacity: 0, x: -20, scale: 0.95, transition: { duration: 0.2 } },
};

const collapsedIconVariants = {
  expanded: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  collapsed: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", damping: 15, stiffness: 300, delay: 0.15 },
  },
};

// ── Glass style shared between mobile button and dropdown ──────────────────

const glassStyle = {
  background: "linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.38) 100%)",
  boxShadow:
    "0 8px 32px rgba(10,31,68,0.15), inset 0 1px 0 rgba(255,255,255,0.85), inset 0 -1px 0 rgba(255,255,255,0.2)",
};

// ── Component ──────────────────────────────────────────────────────────────

export function AnimatedNav() {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );
  const [isExpanded, setExpanded] = React.useState(
    typeof window !== "undefined" ? window.innerWidth >= 640 : true
  );
  const [active, setActive] = React.useState("home");

  const isExpandedRef = React.useRef(
    typeof window !== "undefined" ? window.innerWidth >= 640 : true
  );
  const isMobileRef = React.useRef(isMobile);
  const lastScrollY = React.useRef(0);
  const scrollPositionOnCollapse = React.useRef(0);
  const { wrapperRef, lenisRef } = useScrollContext();

  // Track breakpoint changes
  React.useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 640;
      isMobileRef.current = mobile;
      setIsMobile(mobile);
      if (!mobile) {
        isExpandedRef.current = true;
        setExpanded(true);
      } else {
        // Collapse desktop nav when resizing down
        isExpandedRef.current = false;
        setExpanded(false);
      }
    };
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Scroll: active section + desktop auto-collapse
  React.useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const sectionIds = ["home", "about", "strategic-solutions", "the-brain-trust", "contact"];

    const onScroll = () => {
      const latest = wrapper.scrollTop;
      const previous = lastScrollY.current;

      if (!isMobileRef.current) {
        if (isExpandedRef.current && latest > previous && latest > 150) {
          isExpandedRef.current = false;
          setExpanded(false);
          scrollPositionOnCollapse.current = latest;
        } else if (
          !isExpandedRef.current &&
          latest < previous &&
          scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD
        ) {
          isExpandedRef.current = true;
          setExpanded(true);
        }
      }

      lastScrollY.current = latest;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= 130) {
          setActive(sectionIds[i]);
          break;
        }
      }
    };

    wrapper.addEventListener("scroll", onScroll, { passive: true });
    return () => wrapper.removeEventListener("scroll", onScroll);
  }, [wrapperRef]);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el && lenisRef.current) lenisRef.current.scrollTo(el);
    if (isMobileRef.current) setExpanded(false);
  };

  // ── Mobile layout ──────────────────────────────────────────────────────

  if (isMobile) {
    return (
      <div className="fixed top-4 right-4 z-[100] flex flex-col items-end">
        {/* Hamburger / close button */}
        <motion.button
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 18, stiffness: 220, delay: 0.1 }}
          onClick={() => setExpanded((v) => !v)}
          whileTap={{ scale: 0.9 }}
          style={glassStyle}
          className="h-11 w-11 rounded-full border border-white/60 backdrop-blur-xl flex items-center justify-center flex-shrink-0"
          aria-label={isExpanded ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isExpanded ? (
              <motion.div
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <X className="h-5 w-5 text-navy" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <Menu className="h-5 w-5 text-navy" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Vertical dropdown */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.96 }}
              transition={{ type: "spring", damping: 22, stiffness: 320 }}
              style={glassStyle}
              className="mt-2 min-w-[190px] rounded-2xl border border-white/60 backdrop-blur-xl overflow-hidden py-1.5"
            >
              {navItems.map((item, i) => {
                const isActive = active === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055, type: "spring", damping: 18 }}
                    onClick={() => goTo(item.id)}
                    className={cn(
                      "w-full text-left px-5 py-3 text-sm font-medium tracking-wide transition-colors duration-150 flex items-center gap-2.5",
                      isActive
                        ? "text-ochre bg-white/25"
                        : "text-navy/70 hover:text-navy hover:bg-white/15"
                    )}
                  >
                    <span
                      className={cn(
                        "h-4 w-0.5 rounded-full flex-shrink-0 transition-opacity duration-200",
                        isActive ? "bg-ochre opacity-100" : "opacity-0"
                      )}
                    />
                    {item.name}
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ── Desktop layout (original horizontal pill) ──────────────────────────

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100]">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        whileHover={!isExpanded ? { scale: 1.1 } : {}}
        whileTap={!isExpanded ? { scale: 0.95 } : {}}
        onClick={
          !isExpanded
            ? () => {
                isExpandedRef.current = true;
                setExpanded(true);
              }
            : undefined
        }
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.25) 100%)",
          boxShadow:
            "0 8px 32px rgba(10,31,68,0.12), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(255,255,255,0.2)",
        }}
        className={cn(
          "flex items-center overflow-hidden rounded-full border border-white/60 backdrop-blur-xl h-12",
          !isExpanded && "cursor-pointer justify-center w-12"
        )}
      >
        {/* Logo */}
        <motion.button
          variants={logoVariants}
          onClick={(e) => {
            e.stopPropagation();
            goTo("home");
          }}
          className="flex-shrink-0 flex items-center gap-2 pl-4 pr-3"
        >
          <img src="/prasar-logo-new.svg" alt="Prasar PR" className="h-6 w-6" />
          <span className="font-display font-semibold tracking-widest text-xs text-navy whitespace-nowrap">
            PRASAR PR
          </span>
        </motion.button>

        {/* Nav items */}
        <motion.div
          className={cn("flex items-center gap-1 sm:gap-2 pr-4", !isExpanded && "pointer-events-none")}
        >
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <motion.button
                key={item.id}
                variants={itemVariants}
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(item.id);
                }}
                className={cn(
                  "relative text-xs font-medium tracking-wide transition-colors duration-200 px-2 py-1 whitespace-nowrap",
                  isActive ? "text-ochre" : "text-navy/70 hover:text-navy"
                )}
              >
                {item.name}
                {isActive && <span className="absolute -bottom-0.5 left-2 right-2 h-px bg-ochre" />}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Collapsed icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div variants={collapsedIconVariants} animate={isExpanded ? "expanded" : "collapsed"}>
            <Menu className="h-5 w-5 text-navy" />
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}
