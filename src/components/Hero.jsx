import { useEffect, useRef } from "react";
const Hero = () => {
  const heroRef = useRef(null);
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);

  useEffect(() => {
    const hero = heroRef.current;
    const cursor = cursorRef.current;

    if (!hero || !cursor) return;

    let lastTrailTime = 0;
    let animationFrame;
    let isMoving = false;

    // Helper to create a trail dot
    const createTrail = (x, y, hue) => {
      const trail = document.createElement("div");
      trail.className = "pointer-events-none absolute z-30";
      Object.assign(trail.style, {
        width: "48px",
        height: "48px",
        left: `${x}px`,
        top: `${y}px`,
        borderRadius: "50%",
        background: `hsl(${hue}, 100%, 50%)`,
        opacity: "0.35",
        filter: "blur(14px)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        transition: "opacity 0.7s, background 0.2s",
        willChange: "opacity"
      });
      hero.appendChild(trail);
      // Fade out and remove
      setTimeout(() => {
        trail.style.opacity = "0";
        setTimeout(() => {
          if (trail.parentNode) trail.parentNode.removeChild(trail);
        }, 700);
      }, 0);
      // Keep reference for cleanup
      trailRefs.current.push(trail);
    };

    const moveCursor = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      cursor.style.transform = `translate(-50%, -50%)`;
      cursor.style.opacity = 0.7;

      // Calculate horizontal position as a percentage
      const percent = Math.max(0, Math.min(1, x / rect.width));
      // Map percent to a hue (0 = red, 270 = purple)
      const hue = 0 + percent * 270;
      cursor.style.background = `hsl(${hue}, 100%, 50%)`;

      // Only create a trail if moving
      const now = performance.now();
      if (now - lastTrailTime > 18) { // ~60fps
        createTrail(x, y, hue);
        lastTrailTime = now;
      }
      isMoving = true;
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => { isMoving = false; });
    };

    const hideCursor = () => {
      cursor.style.opacity = 0;
      // Remove all trails
      trailRefs.current.forEach(trail => {
        if (trail.parentNode) trail.parentNode.removeChild(trail);
      });
      trailRefs.current = [];
    };

    hero.addEventListener("mousemove", moveCursor);
    hero.addEventListener("mouseleave", hideCursor);
    hero.addEventListener("mouseenter", () => { cursor.style.opacity = 0.7; });

    // Hide on mount
    cursor.style.opacity = 0;

    return () => {
      hero.removeEventListener("mousemove", moveCursor);
      hero.removeEventListener("mouseleave", hideCursor);
      hero.removeEventListener("mouseenter", () => { cursor.style.opacity = 0.7; });
      // Cleanup any remaining trails
      trailRefs.current.forEach(trail => {
        if (trail.parentNode) trail.parentNode.removeChild(trail);
      });
      trailRefs.current = [];
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-24 sm:pb-16 lg:pt-24 lg:pb-24 overflow-hidden"
    >
      {/* Rainbow Mouse Follower */}
      <div
        ref={cursorRef}
        className="pointer-events-none absolute z-40 transition-opacity duration-200"
        style={{
          width: 60,
          height: 60,
          left: 0,
          top: 0,
          borderRadius: "50%",
          background: "hsl(0, 100%, 50%)",
          opacity: 0,
          filter: "blur(18px)",
          boxShadow: "0 0 64px 32px rgba(0,0,0,0.10)",
          transition: "background 0.2s, opacity 0.2s"
        }}
      />
      {/* Keyframes for pulsing */}
      <style>{`
        @keyframes pulseRainbow {
          0% { box-shadow: 0 0 0 0 rgba(255,0,150,0.5);}
          100% { box-shadow: 0 0 0 20px rgba(255,0,150,0);}
        }
      `}</style>
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary-600 dark:text-primary-400 font-medium">
                Hello! I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                Lauren Hesterman
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
                Senior Front-End Software Engineer
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              8+ years of experience designing, building, and shipping
              modern web applications. I specialize in creating custom, engaging data visualizations and finding calm in the chaos to deliver exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="btn-primary"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </a>

              <a
                href="/Lauren Hesterman Resume.pdf"
                download
                className="btn-secondary"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6">
              <a
                href="https://www.linkedin.com/in/laurenhesterman/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="https://github.com/laurenhesterman"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  {/* Person icon */}
<img
  src="/profile.jpg"
  alt="Lauren Hesterman"
  className="w-full h-full object-cover rounded-full"
  draggable={false}
  style={{ transform: "rotate(20deg)" }}
/>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
