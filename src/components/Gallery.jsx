"use client";

import { useEffect, useRef } from "react";

export default function Gallery() {
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

  const galleryItems = [
    { id: 1, caption: "Classroom Session" },
    { id: 2, caption: "Doubt Solving" },
    { id: 3, caption: "Test Series" },
    { id: 4, caption: "One-on-One Mentoring" },
    { id: 5, caption: "Our Trips" },
    { id: 6, caption: "Celebrations" },
  ];

  return (
    <section id="gallery" className="gallery" ref={ref}>
      <div className="gallery-container">
        <h2 className="section-title">Our Gallery</h2>

        <div className="gallery-scroll-container">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gallery-image">
                <img
                  src={`/.jpg?height=250&width=300&query=${encodeURIComponent(
                    item.caption
                  )}`}
                  alt={item.caption}
                />
              </div>
              <div className="gallery-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
