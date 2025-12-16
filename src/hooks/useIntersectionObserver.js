import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options = {}) => {
 const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
 }, [options]);

  return [elementRef, isIntersecting];
};

export default useIntersectionObserver;