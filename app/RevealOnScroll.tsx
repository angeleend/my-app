"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  rootMargin?: string;
  threshold?: number | number[];
  animationClass?: string; // Class to add when visible (e.g., 'fade-in' or 'slide-up')
  delay?: number; // Optional delay in milliseconds before adding the class
};

export default function RevealOnScroll({
  children,
  rootMargin = "0px 0px -10% 0px", // Trigger when 10% from bottom of viewport
  threshold = 0.1, // Trigger when 10% of element is visible
  animationClass = "fade-in-up", // Default animation class
  delay = 0, // No delay by default
}: Props) {
  const ref = useRef<HTMLDivElement>(null); // Use HTMLDivElement for ref
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a slight delay before setting the animation class
            const timer = setTimeout(() => {
              setHasAnimated(true);
            }, delay);
            observer.disconnect(); // Only animate once
            return () => clearTimeout(timer);
          }
        });
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated, rootMargin, threshold, delay]);

  return (
    <div
      ref={ref}
      className={`reveal-container ${hasAnimated ? animationClass : ""}`}
      style={{ opacity: hasAnimated ? 1 : 0 }} // Start invisible, then let animation take over
    >
      {children}
    </div>
  );
}