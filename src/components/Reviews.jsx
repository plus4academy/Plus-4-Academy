"use client";

import { useEffect, useRef } from "react";

export default function Reviews() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="reviews" ref={ref}>
      <div className="reviews-container">
        <h2 className="section-title">Student Reviews</h2>

        <div className="reviews-content">
          <div className="reviews-scroll-wrapper">
            <div
              className="sk-ww-google-reviews"
              data-embed-id="25631484"
            ></div>
          </div>
        </div>
      </div>

      <script
        src="https://widgets.sociablekit.com/google-reviews/widget.js"
        defer
      ></script>
    </section>
  );
}
