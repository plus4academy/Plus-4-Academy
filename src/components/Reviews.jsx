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

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <section className="reviews" ref={ref}>
      <div className="reviews-container">
        <h2 className="section-title">Student Reviews</h2>

        <div className="reviews-content">
          <div
            className="elfsight-app-66ae7975-903b-4fcc-b944-0e8f234d7af7"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
}
