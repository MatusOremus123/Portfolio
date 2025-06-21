import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  textAlign = "center",
  onAnimationComplete,
}) => {
  const ref = useRef(null);
  const animationCompletedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || animationCompletedRef.current) return;

    // Manual text splitting since SplitText is a paid plugin
    const splitTextIntoSpans = (element, type) => {
      const text = element.textContent;
      element.textContent = '';
      
      if (type === 'chars') {
        return text.split('').map(char => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space
          span.style.display = 'inline-block';
          element.appendChild(span);
          return span;
        });
      } else if (type === 'words') {
        return text.split(' ').map((word, i, arr) => {
          const span = document.createElement('span');
          span.textContent = word;
          span.style.display = 'inline-block';
          element.appendChild(span);
          
          // Add space after word (except last)
          if (i < arr.length - 1) {
            const space = document.createElement('span');
            space.textContent = '\u00A0';
            element.appendChild(space);
          }
          
          return span;
        });
      }
      
      return [];
    };

    const targets = splitTextIntoSpans(el, splitType);

    targets.forEach((t) => {
      t.style.willChange = "transform, opacity";
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
      onComplete: () => {
        animationCompletedRef.current = true;
        targets.forEach(t => {
          t.style.willChange = 'auto';
        });
        onAnimationComplete?.();
      },
    });

    tl.set(targets, from);
    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [text, delay, duration, ease, splitType, from, to, onAnimationComplete]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        textAlign,
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      {text}
    </div>
  );
};

export default SplitText;