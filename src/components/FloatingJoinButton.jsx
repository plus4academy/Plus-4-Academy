"use client";

import { useRef } from "react";

export default function FloatingJoinButton({ onJoinClick }) {
  const buttonRef = useRef(null);

  return (
    <button
      ref={buttonRef}
      onClick={onJoinClick}
      className="floating-join-button"
      aria-label="Join Us"
      title="Join Us"
    >
      <span className="join-text">Join Us</span>
    </button>
  );
}
