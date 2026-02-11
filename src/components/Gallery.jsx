"use client";
import { useEffect, useRef } from "react";

const images = import.meta.glob("../assets/*.{jpg,png}", { eager: true });

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
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const galleryItems = [
    { id: 1, caption: "Classroom Session", image: "classroomsession.jpg" },
    { id: 2, caption: "Doubt Solving", image: "doubtsolving.jpg" },
    { id: 3, caption: "Test Series", image: "testseries.jpg" },
    { id: 4, caption: "One-on-One Mentoring", image: "oneonone.jpg" },
    { id: 5, caption: "Our Trips", image: "ourtrips.jpg" },
    { id: 6, caption: "Celebrations", image: "celebrations.jpg" },
  ];

  return (
    <section id="gallery" className="gallery" ref={ref}>
      <div className="gallery-container">
        <h2 className="section-title">Our Gallery</h2>
        <div className="gallery-scroll-container">
          {galleryItems.map((item, index) => {
            const imgSrc = images[`../assets/${item.image}`]?.default;
            return (
              <div
                key={item.id}
                className="gallery-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="gallery-image">
                  <img src={imgSrc} alt={item.caption} />
                </div>
                <div className="gallery-caption">{item.caption}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
