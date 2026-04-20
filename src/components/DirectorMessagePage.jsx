import { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import "./DirectorMessagePage.css";

const messageParagraphs = [
  "Education today is not just about completing the syllabus; it is about building strong fundamentals, clarity of concepts, and the confidence to apply knowledge in real examinations. At Impulse Academy, in association with Plus 4 Academy, our vision has always been to create an academic environment where students are prepared not only for school examinations but also for competitive challenges like JEE and NEET.",
  "As an educator, I have closely observed that many students struggle not because of lack of effort, but due to lack of proper guidance, structured planning, and consistent evaluation. Our institute was established with the belief that every student can excel when given the right direction, disciplined learning system, and personal mentorship.",
  "At Impulse Academy, we follow a concept-first teaching approach, aligned with NCERT and CBSE curriculum, and gradually strengthen students for higher-level competitive examinations. Our focus remains on conceptual clarity, regular practice, systematic testing, and continuous performance analysis. We do not rush the syllabus; instead, we ensure that students understand why they are learning, not just what they are learning.",
  "In association with Plus 4 Academy, we aim to provide a balanced academic ecosystem where board performance and competitive preparation go hand in hand. Small batch sizes, experienced faculty, doubt-solving support, and regular parent-teacher interaction form the backbone of our system.",
  "I firmly believe that success is not achieved overnight-it is the result of discipline, consistency, and the right mentorship. At Impulse Academy, we are committed to walking this journey with every student, guiding them at every step, and helping them realize their true potential.",
  "I warmly invite students and parents to become a part of our academic family and experience a learning system built on trust, quality, and results.",
];

const revealSettings = {
  distance: 100,
  direction: "vertical",
  reverse: false,
  duration: 0.8,
  ease: "power3.out",
  initialOpacity: 0,
  animateOpacity: true,
  scale: 1,
  threshold: 0.1,
  delay: 0,
  disappearAfter: 0,
  disappearDuration: 0.5,
  disappearEase: "power3.in",
};

export default function DirectorMessagePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="director-page">
      <header className="director-header">
        <div className="director-header-container">
          <h1 className="director-logo">Plus 4 Academy</h1>
          <Link to="/" className="site-home-link">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="director-main">
        <section className="director-title-section">
          <p className="director-kicker">Message from the Director</p>
          <h2 className="director-page-title">Director&apos;s Message</h2>
          <div className="director-title-divider"></div>
        </section>

        <section className="director-grid">
          <div className="director-photo-column">
            <div className="director-photo-bg-shape"></div>
            <div className="director-photo-wrapper">
              <img
                src="/directors.png"
                alt="Director Ravikant Shukla"
                className="director-photo"
              />
              <p className="director-photo-name">Ravikant Shukla</p>
            </div>
          </div>

          <div className="director-text-content">
            {messageParagraphs.map((paragraph, index) => {
              const staggerDelay = 0.06 + index * 0.095 + (index % 2 === 0 ? 0.01 : 0);
              return (
                <ScrollReveal key={paragraph} {...revealSettings} delay={staggerDelay}>
                  <p
                    className={`director-paragraph ${
                      index === 0 ? "director-intro-paragraph" : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                </ScrollReveal>
              );
            })}

          </div>
        </section>
      </main>
    </div>
  );
}
