"use client";

import { useEffect, useState } from "react";

export default function FloatingScholsatButton() {
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    let navScholsatButton = null;
    let observer = null;

    const updateVisibilityFromScroll = () => {
      if (!navScholsatButton) {
        setShowFloatingButton(window.scrollY > 100);
      }
    };

    const setupObserver = () => {
      navScholsatButton = document.querySelector(".navbar .scolsat-button");

      if (!navScholsatButton) {
        updateVisibilityFromScroll();
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          const hasScrolledDown = window.scrollY > 100;
          setShowFloatingButton(!entry.isIntersecting && hasScrolledDown);
        },
        {
          threshold: 0.25,
        }
      );

      observer.observe(navScholsatButton);
    };

    setupObserver();
    window.addEventListener("scroll", updateVisibilityFromScroll, {
      passive: true,
    });
    window.addEventListener("resize", updateVisibilityFromScroll);

    return () => {
      window.removeEventListener("scroll", updateVisibilityFromScroll);
      window.removeEventListener("resize", updateVisibilityFromScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  if (!showFloatingButton) return null;

  return (
    <a
      href="https://quiz.plus4academy.com/login"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-scholsat-button"
      aria-label="Open Scholsat"
      title="Scholsat"
    >
      <span className="floating-scholsat-text">Scholsat</span>
      <span className="floating-scholsat-icon">{"\uD83D\uDE80"}</span>
    </a>
  );
}
