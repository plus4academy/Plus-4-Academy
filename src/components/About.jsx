import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    title: "Foundation Program",
    icon: "9",
    accent: "blue",
    points: [
      "Class 9 and 10 Maths and Science",
      "Strong basics for school exams",
      "Early Olympiad and competitive exposure",
    ],
  },
  {
    title: "Class 11 and 12 Science",
    icon: "12",
    accent: "purple",
    points: [
      "PCM and PCB board exam excellence",
      "NCERT-aligned concept coverage",
      "Structured, exam-focused practice",
    ],
  },
  {
    title: "JEE and NEET Preparation",
    icon: "J",
    accent: "amber",
    points: [
      "Advanced problem-solving methods",
      "Previous year question analysis",
      "Mock tests and exam strategy",
    ],
  },
];

const choices = [
  {
    value: 10,
    suffix: "+",
    icon: "C",
    title: "Concept First",
    text: "Students build clarity before speed.",
  },
  {
    value: 2,
    suffix: "x",
    icon: "B",
    title: "Boards + Competitive",
    text: "One plan supports both goals.",
  },
  {
    value: 25,
    suffix: "",
    icon: "S",
    title: "Small Batches",
    text: "More attention, cleaner feedback.",
  },
  {
    value: 100,
    suffix: "%",
    icon: "M",
    title: "Mentorship",
    text: "Regular tracking for students and parents.",
  },
];

function CountUp({ value, suffix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frameId;
    const duration = 1100;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [active, value]);

  return (
    <span>
      {active ? count : 0}
      {suffix}
    </span>
  );
}

export default function About() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          entry.target.classList.add("is-visible");
        }
      },
      { threshold: 0.18 }
    );

    const node = ref.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <section className="home-showcase" ref={ref}>
      <div className="home-showcase-container">
        <div className="home-section-head reveal-item">
          <h2 className="section-title gradient-heading">Courses We Offer</h2>
        </div>

        <div className="home-course-grid">
          {courses.map((course, index) => (
            <article
              className={`home-course-card accent-${course.accent} reveal-item`}
              style={{ transitionDelay: `${index * 100}ms` }}
              key={course.title}
            >
              <div className="home-course-accent"></div>
              <div className="home-course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <ul>
                {course.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <button
                className="home-course-cta"
                onClick={() => navigate("/courses")}
              >
                {index === 2 ? "Enroll Now" : "Know More"}
              </button>
            </article>
          ))}
        </div>

        <div className="home-section-head choose-head reveal-item">
          <h2 className="section-title gradient-heading">
            Why Students & Parents Choose Us
          </h2>
        </div>

        <div className="choose-grid">
          {choices.map((item, index) => (
            <article
              className="choose-card reveal-item"
              style={{ transitionDelay: `${index * 100}ms` }}
              key={item.title}
            >
              <div className="choose-icon">{item.icon}</div>
              <strong className="choose-stat">
                <CountUp
                  value={item.value}
                  suffix={item.suffix}
                  active={active}
                />
              </strong>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
