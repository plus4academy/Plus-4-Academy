"use client";

import { useEffect, useState } from "react";

export default function FloatingScholsatButton() {
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const isElementVisibleInViewport = (el) => {
      if (!el) return false;

      const style = window.getComputedStyle(el);
      if (
        style.display === "none" ||
        style.visibility === "hidden" ||
        Number(style.opacity) === 0
      ) {
        return false;
      }

      const rect = el.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return false;

      const inViewport =
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.top < window.innerHeight &&
        rect.left < window.innerWidth;
      if (!inViewport) return false;

      // Point visibility check helps detect cases where the element exists
      // but is clipped by collapsed mobile nav containers.
      const x = Math.min(
        Math.max(rect.left + rect.width / 2, 0),
        window.innerWidth - 1
      );
      const y = Math.min(
        Math.max(rect.top + rect.height / 2, 0),
        window.innerHeight - 1
      );
      const topElement = document.elementFromPoint(x, y);
      return !!topElement && (el === topElement || el.contains(topElement));
    };

    const evaluateFloatingButtonVisibility = () => {
      const navScholsatButton = document.querySelector(".navbar .scolsat-button");
      const hasScrolledDown = window.scrollY > 80;
      const isNavButtonVisible = isElementVisibleInViewport(navScholsatButton);
      setShowFloatingButton(hasScrolledDown && !isNavButtonVisible);
    };

    evaluateFloatingButtonVisibility();
    window.addEventListener("scroll", evaluateFloatingButtonVisibility, {
      passive: true,
    });
    window.addEventListener("resize", evaluateFloatingButtonVisibility);
    window.addEventListener("orientationchange", evaluateFloatingButtonVisibility);

    return () => {
      window.removeEventListener("scroll", evaluateFloatingButtonVisibility);
      window.removeEventListener("resize", evaluateFloatingButtonVisibility);
      window.removeEventListener(
        "orientationchange",
        evaluateFloatingButtonVisibility
      );
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
