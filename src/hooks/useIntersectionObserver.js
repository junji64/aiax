import { useEffect, useRef, useState } from 'react';

export default function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        // Once animated, we can unobserve if we want it to stay visible
        if (options.triggerOnce) {
          observer.unobserve(element);
        }
      } else {
        if (!options.triggerOnce) {
          setIsIntersecting(false);
        }
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element && !options.triggerOnce) {
        observer.unobserve(element);
      }
    };
  }, [options.triggerOnce, options.threshold, options.rootMargin]);

  return [elementRef, isIntersecting];
}
