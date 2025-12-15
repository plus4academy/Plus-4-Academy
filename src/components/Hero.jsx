"use client";

export default function Hero({ onEnquireClick }) {
  const handleDemoClick = () => {
    window.open("https://www.youtube.com/@Plusfouracademy", "_blank");
  };

  const handleGalleryClick = () => {
    document.getElementById("gallery")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Building Strong Foundations for Boards, JEE & NEET
          </h1>
          <p className="hero-subtitle">
            Expert concept-driven coaching for Class 9-12 with integrated board
            and competitive exam preparation.
          </p>

          <button className="hero-button" onClick={onEnquireClick}>
            Enquire Now
          </button>
        </div>

        <div className="hero-cards">
          <div className="hero-card hero-card-purple" onClick={handleDemoClick}>
            <span className="card-text">Demo lectures here</span>
            <span className="card-hover-text">Click here</span>
          </div>

          <div
            className="hero-card hero-card-orange"
            onClick={handleGalleryClick}
          >
            <span className="card-text">Explore our gallery</span>
            <span className="card-hover-text">Click here</span>
          </div>
        </div>
      </div>
    </section>
  );
}
