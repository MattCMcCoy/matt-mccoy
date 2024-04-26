import { useEffect, useState, type RefObject } from "react";

export function useIsVisible<T extends HTMLElement>(
  ref: RefObject<T>,
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) {
        setIntersecting(entry.isIntersecting);
      }
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isIntersecting;
}
