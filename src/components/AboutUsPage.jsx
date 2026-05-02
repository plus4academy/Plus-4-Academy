import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import classroom from "../assets/classroomsession.png";
import mentoring from "../assets/mentoring.jpg";
import doubts from "../assets/doubtsolving.jpg";
import testseries from "../assets/testseries.jpg";

const blocks = [
  {
    title: "Why Plus 4 Academy?",
    image: classroom,
    imageAlt: "Plus 4 Academy classroom session",
    text: [
      "Plus 4 Academy was founded to solve one major problem students face today: lack of conceptual clarity and proper guidance.",
      "We provide structured learning, expert teaching, and personal mentorship to help students excel in school exams while preparing confidently for JEE Main, JEE Advanced, and NEET.",
    ],
  },
  {
    title: "Our Teaching Philosophy",
    subtitle: "Learn Concepts. Not Just Answers.",
    image: mentoring,
    imageAlt: "Mentoring session at Plus 4 Academy",
    text: [
      "At Plus 4 Academy, we focus on deep understanding instead of rote learning.",
      "We do not train students to memorize. We train them to think.",
    ],
    timeline: [
      "Strong conceptual foundations",
      "Logical and analytical thinking",
      "Application-based problem solving",
      "Confidence with unfamiliar questions",
    ],
  },
  {
    title: "Integrated Boards + Competitive Preparation",
    subtitle: "One Preparation. Two Goals.",
    image: doubts,
    imageAlt: "Doubt solving at Plus 4 Academy",
    text: [
      "Our integrated curriculum helps students perform better in boards without sacrificing competitive exam preparation.",
      "Smart planning reduces academic stress and keeps revision regular.",
    ],
    timeline: [
      "Strict alignment with NCERT syllabus",
      "Gradual JEE and NEET level problem exposure",
      "Regular revision and testing",
      "Balanced board and entrance exam planning",
    ],
  },
  {
    title: "Assessments & Performance Tracking",
    image: testseries,
    imageAlt: "Test series and performance tracking",
    text: [
      "Chapter-wise tests, cumulative assessments, and full-length mock exams keep preparation honest.",
      "Detailed performance analysis keeps students and parents informed and on track.",
    ],
    points: [
      "Chapter-wise tests",
      "Cumulative assessments",
      "Full-length mock exams",
      "Detailed performance analysis",
    ],
  },
];

export default function AboutUsPage() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const nodes = ref.current?.querySelectorAll(".about-page-block") || [];
    nodes.forEach((node) => observer.observe(node));

    return () => nodes.forEach((node) => observer.unobserve(node));
  }, []);

  return (
    <main className="about-us-page page-fade" ref={ref}>
      <header className="about-us-header">
        <div className="about-us-header-container">
          <h1 className="about-us-logo">Plus 4 Academy</h1>
          <Link to="/" className="site-home-link">
            Home
          </Link>
        </div>
      </header>

      <header className="about-us-hero">
        <div className="about-us-hero-content">
          <p>Plus 4 Academy</p>
          <h1>About Plus 4 Academy</h1>
          <span>Concept clarity, exam confidence, and steady mentorship.</span>
        </div>
      </header>

      <section className="about-page-content">
        {blocks.map((block, index) => (
          <article
            className={`about-page-block ${
              index % 2 === 0 ? "from-left" : "from-right"
            }`}
            key={block.title}
          >
            <div className="about-page-image-wrap">
              <img src={block.image} alt={block.imageAlt} />
            </div>
            <div className="about-page-copy">
              <div className="animated-border"></div>
              <h2 className="gradient-heading">{block.title}</h2>
              {block.subtitle && <h3>{block.subtitle}</h3>}
              {block.text.map((text) => (
                <p key={text}>{text}</p>
              ))}

              {block.timeline && (
                <ol className="about-timeline">
                  {block.timeline.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              )}

              {block.points && (
                <ul className="about-point-list">
                  {block.points.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
