"use client";

import { useState, useEffect } from "react";
import JoinUsForm from "./JoinUsForm";

export default function JoinUsFormModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Auto-display modal 1 second after page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="join-modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="join-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="join-modal-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
        >
          ×
        </button>
        <JoinUsForm />
      </div>
    </div>
  );
}
