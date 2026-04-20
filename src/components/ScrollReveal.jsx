import { useEffect, useRef, useState } from "react";

const EASING_MAP = {
  "power3.out": "cubic-bezier(0.22, 1, 0.36, 1)",
  "power3.in": "cubic-bezier(0.64, 0, 0.78, 0)",
  linear: "linear",
  ease: "ease",
  "ease-in": "ease-in",
  "ease-out": "ease-out",
  "ease-in-out": "ease-in-out",
};

export default function ScrollReveal({
  children,
  container,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = "power3.in",
  onComplete,
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = elementRef.current;
    if (!target) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (disappearAfter > 0) {
          window.setTimeout(() => {
            setIsVisible(false);
          }, disappearAfter * 1000);
        }
      },
      {
        root: container?.current ?? null,
        threshold,
      },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [container, threshold, disappearAfter]);

  useEffect(() => {
    if (isVisible && typeof onComplete === "function") {
      const timer = window.setTimeout(() => {
        onComplete();
      }, (delay + duration) * 1000);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [isVisible, onComplete, delay, duration]);

  const axis = direction === "horizontal" ? "X" : "Y";
  const signedDistance = reverse ? -distance : distance;
  const hiddenTransform = `translate${axis}(${signedDistance}px) scale(${scale})`;
  const shownTransform = `translate${axis}(0px) scale(1)`;
  const transitionEase = EASING_MAP[ease] || ease;
  const hiddenEase = EASING_MAP[disappearEase] || disappearEase;

  return (
    <div
      ref={elementRef}
      style={{
        transform: isVisible ? shownTransform : hiddenTransform,
        opacity: animateOpacity ? (isVisible ? 1 : initialOpacity) : 1,
        transitionProperty: "transform, opacity",
        transitionDuration: `${isVisible ? duration : disappearDuration}s`,
        transitionTimingFunction: isVisible ? transitionEase : hiddenEase,
        transitionDelay: `${isVisible ? delay : 0}s`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
