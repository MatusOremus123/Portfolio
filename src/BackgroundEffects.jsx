import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BackgroundEffects = () => {
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);

  useEffect(() => {
    // Parallax effect for blobs
    const blobs = [
      { ref: blob1Ref, speed: 0.5 },
      { ref: blob2Ref, speed: 0.3 },
      { ref: blob3Ref, speed: 0.7 }
    ];

    blobs.forEach(({ ref, speed }) => {
      gsap.to(ref.current, {
        y: () => window.innerHeight * speed,
        ease: "none",
        scrollTrigger: {
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div 
        ref={blob1Ref}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div 
        ref={blob2Ref}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div 
        ref={blob3Ref}
        className="absolute top-3/4 left-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
      ></div>
    </div>
  );
};

export default BackgroundEffects;